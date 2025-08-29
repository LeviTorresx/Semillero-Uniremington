"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { fetchUserThunk } from "@/app/store/features/AuthSlice";
import { fetchProjects } from "@/app/store/thunks/projectsThunks";
import { fetchNews } from "@/app/store/thunks/NewsThunks";
import { fetchMembers } from "@/app/store/thunks/MembersThunks";

export default function PrivateDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const projects = useSelector((state: RootState) => state.projects.projects);
  const userAuth = useSelector((state: RootState) => state.auth);
  const news =  useSelector((state: RootState) => state.news.news);
  const members =  useSelector((state: RootState) => state.members.users);

  useEffect(() => {
    const needsUser = !userAuth || !userAuth.isAuthenticated;
    const needsProjects = !projects || projects.length === 0;
    const needsNews = !news || news.length === 0;
    const needsMembers = !members || members.length === 0;

    if (needsUser || needsProjects || needsMembers) {
      if (needsUser) dispatch(fetchUserThunk());
      if (needsProjects) dispatch(fetchProjects());
      if (needsNews) dispatch(fetchNews());
      if (needsMembers) dispatch(fetchMembers());
    }
  }, [dispatch, userAuth, projects, news, members]);

  return <>{children}</>;
}
