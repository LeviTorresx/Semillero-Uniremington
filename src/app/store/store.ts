import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import ProjectReducer from "./features/ProjectSlice";
import NewReducer from "./features/NewSlice";
import ResearchLineReducer from "./features/ResearchLineSlice";
import AuthReducer from "./features/AuthSlice";
import MemberReducer from "./features/MemberSlice";

const rootReducer = combineReducers({
  projects: ProjectReducer,
  news: NewReducer,
  researchLines: ResearchLineReducer,
  auth: AuthReducer,
  members: MemberReducer,
});

// configuración de persistencia
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // 👉 solo persistimos auth (user, token, etc.)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // necesario por redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
