import { usersMock } from "@/app/mocks/data";
import { User } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMembers } from "../thunks/MembersThunks";


interface MemberState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: MemberState = {
  users: usersMock,
  loading: false,
  error: null,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    deleteMember: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((m) => m.userId !== action.payload);
    },
    toggleValidMember: (state, action: PayloadAction<number>) => {
      const member = state.users.find((n) => n.userId === action.payload);
      if (member) {
        member.valid = !member.valid;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMembers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al cargar los miembros";
      });
  },
});

export default memberSlice.reducer;
export const { deleteMember, toggleValidMember } = memberSlice.actions;
