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
