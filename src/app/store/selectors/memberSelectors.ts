import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectMembers = createSelector(
  (state: RootState) => state.members.users,
  (m) => m.filter((member) => member.role === "MEMBER")
);
