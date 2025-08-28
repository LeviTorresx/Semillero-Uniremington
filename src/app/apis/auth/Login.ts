// services/auth.ts
import axios, { AxiosError } from "axios";

const apiUrl = "http://localhost:8081";

interface LoginRequest {
  email: string;
  password: string;
}

export async function loginUser(loginRequest: LoginRequest) {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, loginRequest, {
      withCredentials: true, // Para cookies/sesión
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;

    if (error.response) {
      // El backend respondió con error
      throw new Error(
        error.response.data?.message || "Credenciales inválidas ❌"
      );
    } else if (error.request) {
      // No hubo respuesta
      throw new Error("No se pudo conectar con el servidor");
    } else {
      // Error al preparar la petición
      throw new Error("Error desconocido en el login");
    }
  }
}
