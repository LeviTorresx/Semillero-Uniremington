"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { fetchUserThunk } from "@/app/store/features/AuthSlice";
import { fetchProjects } from "@/app/store/thunks/projectsThunks";

export default function PrivateDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const projects = useSelector((state: RootState) => state.projects.projects);
  const userAuth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const needsUser = !userAuth || !userAuth.isAuthenticated;
    const needsProjects = !projects || projects.length === 0;

    if (needsUser || needsProjects) {
      if (needsUser) dispatch(fetchUserThunk());
      if (needsProjects) dispatch(fetchProjects());
    }
  }, [dispatch, userAuth, projects]);

  return <>{children}</>;
}
