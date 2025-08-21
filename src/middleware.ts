import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  console.log("🔍 Middleware ejecutándose en:", request.nextUrl.pathname);

  const token = request.cookies.get("jwt")?.value;
  console.log("📌 Token encontrado:", token);

  if (!token) {
    console.log("🚫 No hay token, redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );
    console.log("✅ Token válido, permitiendo acceso");
    return NextResponse.next();
  } catch (err) {
    console.log("❌ Token inválido:", err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/member/:path*"],
};
