
'use client';

import { AppDispatch, RootState } from "@/app/store/store";
import { fetchProjects } from "@/app/store/thunks/projectsThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PublicDataProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects.projects);

  useEffect(() => {
    if (!projects) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects]);

  return <>{children}</>;
}

