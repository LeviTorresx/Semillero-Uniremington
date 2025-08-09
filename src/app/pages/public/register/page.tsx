// app/register/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RegisterForm from "@/app/components/auth/RegisterForm";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    console.log("Registro:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full border border-gray-200 rounded-lg shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/Logo_Uniremington.png"
            alt="Logo Uniremington"
            width={120}
            height={50}
            className="object-contain bg-white"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">
          Crear cuenta
        </h2>

        <RegisterForm
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          onNameChange={(e) => setName(e.target.value)}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
          handleSubmit={handleSubmit}
        />

        <p className="text-sm text-center mt-4 text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/pages/public/login" className="text-red-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
