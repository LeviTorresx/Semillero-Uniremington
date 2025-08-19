import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "./features/ProjectSlice";
import NewReducer from "./features/NewSlice";
import ResearchLineReducer from "./features/ResearchLineSlice";
import AuthReducer from "./features/AuthSlice";
import MemberReducer from"./features/MemberSlice"
export const store = configureStore({
  reducer: {
    projects: ProjectReducer,
    news: NewReducer,
    researchLines: ResearchLineReducer,
    auth: AuthReducer,
    members: MemberReducer
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
