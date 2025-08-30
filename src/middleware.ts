// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  console.log("🔍 Middleware ejecutándose en:", request.nextUrl.pathname);

  const token = request.cookies.get("jwt")?.value;
  if (!token) {
    console.log("🚫 No hay token, redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verificar el token con la misma secret key usada en Spring Boot
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );

    const role = payload.role as string | undefined;
    const userId = payload.userId as number | undefined;
    const email = payload.sub as string | undefined;

    console.log("✅ Token válido:", { role, userId, email });

    // 🔐 Reglas de acceso según el rol y el path
    if (request.nextUrl.pathname.startsWith("/admin")) {
      if (role !== "ADMIN") {
        console.log("🚫 Acceso denegado, rol requerido: ADMIN");
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    if (request.nextUrl.pathname.startsWith("/member")) {
      if (role === "ADMIN") {
        console.log("ℹ️ Admin intentando entrar a /member → redirigiendo a /admin");
        return NextResponse.redirect(new URL("/admin", request.url));
      }

      if (role !== "MEMBER") {
        console.log("🚫 Acceso denegado, rol requerido: MEMBER o ADMIN");
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    // Si pasa todas las validaciones → permitir acceso
    return NextResponse.next();
  } catch (err) {
    console.error("❌ Token inválido:", err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Indicar en qué rutas corre el middleware
export const config = {
  matcher: ["/admin/:path*", "/member/:path*"],
};
