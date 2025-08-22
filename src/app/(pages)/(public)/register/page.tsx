// app/register/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RegisterForm from "@/app/components/auth/RegisterForm";
import { User } from "@/app/types/User";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { register } from "@/app/apis/auth/Register";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userData.password !== confirmPassword) {
      MySwal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }

    try {
      const response = await register(userData);
      MySwal.fire("¡Éxito!", "Cuenta creada con éxito", "success");
      console.log("Respuesta del backend:", response);
      router.push("login");
    } catch (error) {
      console.error("Registration failed:", error);
      MySwal.fire("Error", "No se pudo crear la cuenta ", "error");
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
          phone={userData.phone}
          password={userData.password}
          confirmPassword={confirmPassword}
          onNameChange={(e) =>
            setUserData({ ...userData, name: e.target.value })
          }
          onEmailChange={(e) =>
            setUserData({ ...userData, email: e.target.value })
          }
          onPhoneChange={(e) =>
            setUserData({ ...userData, phone: e.target.value })
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
