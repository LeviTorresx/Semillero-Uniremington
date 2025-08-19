import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectMembers = createSelector(
  (state: RootState) => state.members,
  (m) => m.filter((member) => member.role === "MEMBER")
);
