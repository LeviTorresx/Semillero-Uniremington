import { usersMock } from "@/app/mocks/data";
import { User } from "@/app/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User[] = usersMock;

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    deleteMember: (state, action) => {
      return state.filter((m) => m.id !== action.payload);
    },
    toggleValidMember: (state, action: PayloadAction<string>) => {
      const member = state.find((n) => n.id === action.payload);
      if (member) {
        member.valid = !member.valid; // alterna true/false
      }
    },
  },
});

export default memberSlice.reducer;
export const { deleteMember, toggleValidMember } = memberSlice.actions;
