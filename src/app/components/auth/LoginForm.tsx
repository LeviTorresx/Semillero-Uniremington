// components/LoginForm.tsx
"use client";

import React from "react";

interface Props {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  handleSubmit,
}: Props) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-700"
          value={email}
          onChange={onEmailChange}
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-700"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}
