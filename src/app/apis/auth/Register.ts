// services/auth.ts
import { UserRequest } from "@/app/types/User";
import axios, { AxiosError } from "axios";

export async function register(userRequest: UserRequest) {
  const apiUrl = "http://localhost:8081";

  try {
    const response = await axios.post(`${apiUrl}/auth/register`, userRequest);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Registration failed");
    }
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;

    if (error.response) {
      // El servidor respondió pero con error
      throw new Error(
        error.response.data?.message || "El registro falló en el servidor"
      );
    } else if (error.request) {
      // No hubo respuesta
      throw new Error("No se pudo conectar con el servidor");
    } else {
      // Error al configurar la petición
      throw new Error("Error desconocido en la petición");
    }
  }
}
