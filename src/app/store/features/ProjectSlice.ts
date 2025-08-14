import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/app/types/Project";
import { projectsMock } from "@/app/mocks/data";

const initialState: Project[] = projectsMock;

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      return action.payload;
    },
    addProject: (state, action) => {
      state.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

export default projectSlice.reducer;
export const { setProjects, addProject, updateProject, deleteProject } =
  projectSlice.actions;
