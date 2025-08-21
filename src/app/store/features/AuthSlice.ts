import { fetchUser } from "@/app/apis/auth/FetchUser";
import { User } from "@/app/types/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Thunk: obtiene el usuario desde el backend
export const fetchUserThunk = createAsyncThunk<User>(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const user: User = await fetchUser();
      return user;
    } catch (error) {
      return rejectWithValue("No autenticado");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(fetchUserThunk.rejected, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
