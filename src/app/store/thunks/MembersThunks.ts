import { addUserToProject } from "@/app/apis/members/AddMemberToProject";
import { getsAllsMember } from "@/app/apis/members/GetsAllsMember";
import { User } from "@/app/types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMembers = createAsyncThunk<User[]>(
  "user/fetchMember",
  async () => {
    const response = await getsAllsMember();
    return response;
  }
);

// Tipo para los argumentos del thunk
interface AddUserToProjectArgs {
  projectId: number;
  userId: number;
}

// Thunk para agregar usuario a un proyecto
export const addMemberToProject = createAsyncThunk<
  string, // tipo de retorno (mensaje del backend)
  AddUserToProjectArgs,
  { rejectValue: string }
>("user/addMemberToProject", async ({ projectId, userId }) => {
  try {
    const response = await addUserToProject(projectId, userId);
    return response.data; // "User added"
  } catch (error: unknown) {
    return console.error(error);
  }
});
