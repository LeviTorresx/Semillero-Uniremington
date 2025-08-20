import { User } from "@/app/types/User";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    phone: "",
    email: "",
    role: "",
    password: null,
    valid: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = initialState.user;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
