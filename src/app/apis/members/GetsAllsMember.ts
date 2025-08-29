import { User } from "@/app/types/User";
import axios, { AxiosError } from "axios";

const apiUrl = "http://localhost:8081/member";

async function fetchWithRetries<T>(
  url: string,
  retries: number = 2,
  delay: number = 500
): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;

    if (retries > 1) {
      // esperar un poco antes de reintentar
      await new Promise((res) => setTimeout(res, delay));
      return fetchWithRetries(url, retries - 1, delay);
    } else {
      throw new Error(error.response?.data?.message || "Error al obtener datos");
    }
  }
}

export async function getsAllsMember(): Promise<User[]> {
  return fetchWithRetries<User[]>(`${apiUrl}/get-all-users`);
}
