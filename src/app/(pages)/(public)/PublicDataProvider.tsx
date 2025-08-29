"use client";

import { AppDispatch, RootState } from "@/app/store/store";
import { fetchMembers } from "@/app/store/thunks/MembersThunks";
import { fetchProjects } from "@/app/store/thunks/projectsThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PublicDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const members = useSelector((state: RootState) => state.members.users);

  useEffect(() => {
    if (!projects || !members) {
      dispatch(fetchProjects());
      dispatch(fetchMembers());
    }
  }, [dispatch, projects, members]);

  return <>{children}</>;
}
