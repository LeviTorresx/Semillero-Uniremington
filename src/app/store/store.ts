import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "./features/ProjectSlice";
import NewReducer from "./features/NewSlice";
import ResearchLineReducer from "./features/ResearchLineSlice";
export const store = configureStore({
  reducer: {
    projects: ProjectReducer,
    news: NewReducer,
    researchLines: ResearchLineReducer, // Assuming you have a ResearchLineReducer
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
