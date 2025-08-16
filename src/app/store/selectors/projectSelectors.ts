import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectValidatedProjects = createSelector(
  (state: RootState) => state.projects,
  (projects) => projects.filter((p) => p.valid)
);
