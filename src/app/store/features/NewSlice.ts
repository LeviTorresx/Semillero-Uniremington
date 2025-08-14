import { createSlice } from "@reduxjs/toolkit";
import { News } from "@/app/types/New";
import { newsMock } from "@/app/mocks/data";

const initialState: News[] = newsMock;

const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      return action.payload;
    },
    addNew: (state, action) => {
      state.push(action.payload);
    },
    updateNew: (state, action) => {
      const index = state.findIndex((n) => n.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteNew: (state, action) => {
      return state.filter((n) => n.id !== action.payload);
    },
  },
});

export default newSlice.reducer;
export const { setNews, addNew, updateNew, deleteNew } = newSlice.actions;
