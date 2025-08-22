import { User } from "@/app/types/User";
import axios from "axios";

export async function fetchUser() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/auth/user`, {
      withCredentials: true,
    });

    if (!response.data || response.status !== 200) {
      throw new Error("Failed to fetch user data");
    }

    const userData = (await response.data) as User;
    console.log("User data fetched successfully:", userData);

    return userData;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
