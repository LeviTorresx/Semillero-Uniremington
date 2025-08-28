import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectValidatedNews = createSelector(
  (state: RootState) => state.news.news,
  (news) => news.filter((p) => p.valid)
);
