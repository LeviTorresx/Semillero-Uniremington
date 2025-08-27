import { UserRequest } from "@/app/types/User";
import axios from "axios";

export async function register(userRequest: UserRequest) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.post(`${apiUrl}/auth/register`, userRequest,);

  if (response.status === 200) {
    return await response.data;
  } else {
    throw new Error("Registration failed");
  }
}
