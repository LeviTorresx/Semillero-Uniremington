import axios from "axios";

const apiUrl = "http://localhost:8081";

export async function loginUser(LoginRequest: {
  email: string;
  password: string;
}) {
  const response = await axios.post(`${apiUrl}/auth/login`, LoginRequest, {
    withCredentials: true,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Login failed");
  }
}
