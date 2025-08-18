import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "@/app/types/Project";
import { projectsMock } from "@/app/mocks/data";

const initialState: Project[] = projectsMock;

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      return action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      return state.filter((project) => project.id !== action.payload);
    },
    toggleValidProject: (state, action: PayloadAction<string>) => {
      const project = state.find((p) => p.id === action.payload);
      if (project) {
        project.valid = !project.valid; // alterna true/false
      }
    },
   
  },
});

export default projectSlice.reducer;
export const {
  setProjects,
  addProject,
  updateProject,
  deleteProject,
  toggleValidProject,
} = projectSlice.actions;
