import { User } from "@/app/types/User";
import axios from "axios";

export async function register(User: User) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.post(`${apiUrl}/auth/register`, User, {
    withCredentials: true,
  });

  if (response.status === 200) {
    return await response.data;
  } else {
    throw new Error("Registration failed");
  }
}
