// app/register/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RegisterForm from "@/app/components/auth/RegisterForm";
import { User } from "@/app/types/User";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function RegisterPage() {
  const [userData, setUserData] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "MEMBER",
    valid: false,
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const MySwal = withReactContent(Swal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userData.password !== confirmPassword) {
      MySwal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }

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
          name={userData.name}
          email={userData.email}
          password={userData.password}
          confirmPassword={confirmPassword}
          onNameChange={(e) =>
            setUserData({ ...userData, name: e.target.value })
          }
          onEmailChange={(e) =>
            setUserData({ ...userData, email: e.target.value })
          }
          onPasswordChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
          handleSubmit={handleSubmit}
        />

        <p className="text-sm text-center mt-4 text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-red-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
