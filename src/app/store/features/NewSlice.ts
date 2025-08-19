import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    toggleValidNews: (state, action: PayloadAction<string>) => {
      const news = state.find((n) => n.id === action.payload);
      if (news) {
        news.valid = !news.valid; // alterna true/false
      }
    },
  },
});

export default newSlice.reducer;
export const { setNews, addNew, updateNew, deleteNew, toggleValidNews } = newSlice.actions;
