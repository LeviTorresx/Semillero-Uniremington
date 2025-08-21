import { usersMock } from "@/app/mocks/data";
import { User } from "@/app/types/User";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

const initialState: AuthState = {
  isAuthenticated: true,
  user: usersMock[0], 
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
