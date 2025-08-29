import { User } from "@/app/types/User";
import axios, { AxiosError } from "axios";

export async function getsAllsMember(): Promise<User[]> {
  const apiUrl = "http://localhost:8081";
  try {
    const response = await axios.get<User[]>(`${apiUrl}/get-all-users`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Error al obtener proyectos"
    );
  }
}
