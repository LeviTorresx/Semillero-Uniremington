import { createSlice } from "@reduxjs/toolkit";
import { ResearchArea } from "@/app/types/ResearchLine";
import { researchLinesMocks } from "@/app/mocks/data";

const initialState: ResearchArea[] = researchLinesMocks;

const researchLineSlice = createSlice({
  name: "researchLines",
  initialState,
  reducers: {
    addResearchLine: (state, action) => {
      state.push(action.payload);
    },
    updateResearchLine: (state, action) => {
      const index = state.findIndex((line) => line.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteResearchLine: (state, action) => {
      return state.filter((line) => line.id !== action.payload.id);
    },
  },
});

export default researchLineSlice.reducer;
export const { addResearchLine, updateResearchLine, deleteResearchLine } =
  researchLineSlice.actions;
