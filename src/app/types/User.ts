export interface User {
  userId: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  password: string;
  valid: boolean;
}

export interface UserRequest {
  name: string;
  phone: string;
  email: string;
  password: string;
  valid: boolean;
}
