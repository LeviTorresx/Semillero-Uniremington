// app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/app/components/auth/LoginForm";
import { loginUser } from "@/app/apis/auth/Login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [LoginRequest, setLoginRequest] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser(LoginRequest);
      alert("Login successful!");
      console.log("Respuesta del backend:", data);
      router.push("/member");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full border border-gray-200 rounded-lg shadow-md p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/1-removebg-preview.png"
            alt="Logo Uniremington"
            width={230}
            height={60}
            className="object-contain bg-white"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 text-center mb-6">
          Iniciar Sesión
        </h2>

        <LoginForm
          email={LoginRequest.email}
          password={LoginRequest.password}
          onEmailChange={(e) =>
            setLoginRequest({ ...LoginRequest, email: e.target.value })
          }
          onPasswordChange={(e) =>
            setLoginRequest({ ...LoginRequest, password: e.target.value })
          }
          handleSubmit={handleSubmit}
        />

        <p className="text-sm text-center mt-4 text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="text-red-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}
