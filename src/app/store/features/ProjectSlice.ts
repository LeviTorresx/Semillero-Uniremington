import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/app/types/Project";
import { approveProjectThunk, createProjectThunk, editProjectThunk, fetchProjects } from "../thunks/projectsThunks";


interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // Reducers locales (si quieres alguno extra manual)
  },
  extraReducers: (builder) => {
    // 🔹 Fetch all projects
    builder.addCase(fetchProjects.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error fetching projects";
    });

    // 🔹 Create project
    builder.addCase(createProjectThunk.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });

    // 🔹 Edit project
    builder.addCase(editProjectThunk.fulfilled, (state, action) => {
      const index = state.projects.findIndex(
        (p) => p.projectId === action.payload.projectId
      );
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    })
     .addCase(approveProjectThunk
          .fulfilled, (state, action) => {
          const { projectId } = action.payload;
          const project = state.projects.find((p) => p.projectId === projectId);
          if (project) {
            project.valid = true; // marcamos como aprobada
          }
        })
        .addCase(approveProjectThunk.rejected, (state, action) => {
          state.error = action.payload as string;
        });
  },
});

export default projectSlice.reducer;
