import { createSlice } from "@reduxjs/toolkit";
import { ResearchArea } from "@/app/types/ResearchLine";

const initialState: ResearchArea[] = [
  {
    id: "1",
    name: "Ingeniería de Sistemas",
    topics: [
      { name: "Inteligencia Artificial", url: "/ai", identifer: "ai" },
      { name: "Desarrollo Web", url: "/web-development", identifer: "web-dev" },
      {
        name: "Seguridad informática",
        url: "/cybersecurity",
        identifer: "cybersec",
      },
      {
        name: "Transformación Digital",
        url: "/digital-transformation",
        identifer: "digital-transformation",
      },
    ],
  },
  {
    id: "2",
    name: "Contaduría Pública",
    topics: [
      {
        name: "Finanzas y gestión pública",
        url: "/public-finance",
        identifer: "public-finance",
      },
      {
        name: "Auditoría digital",
        url: "/digital-audit",
        identifer: "digital-audit",
      },
      { name: "NIIF", url: "/ifrs", identifer: "ifrs" },
      {
        name: "Contabilidad y tecnología",
        url: "/accounting-technology",
        identifer: "accounting-tech",
      },
    ],
  },
];

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
