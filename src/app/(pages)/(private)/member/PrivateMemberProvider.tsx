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
  
  const userAuth = useSelector((state: RootState) => state.auth);
 

 useEffect(() => {
  if (!userAuth?.isAuthenticated) {
    dispatch(fetchUserThunk());
  }
}, [dispatch, userAuth?.isAuthenticated]);

useEffect(() => {
  dispatch(fetchProjects());
  dispatch(fetchNews());
  dispatch(fetchMembers());
}, [dispatch]);


  return <>{children}</>;
}
