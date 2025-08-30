"use client";

import { fetchUserThunk } from "@/app/store/features/AuthSlice";
import { AppDispatch} from "@/app/store/store";
import { fetchMembers } from "@/app/store/thunks/MembersThunks";
import { fetchNews } from "@/app/store/thunks/NewsThunks";
import { fetchProjects } from "@/app/store/thunks/projectsThunks";
import { useEffect } from "react";
import { useDispatch} from "react-redux";

export default function PublicDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserThunk());
    dispatch(fetchProjects());
    dispatch(fetchNews());
    dispatch(fetchMembers());
  }, [dispatch]);

  return <>{children}</>;
}
