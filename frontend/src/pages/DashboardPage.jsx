import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProjects } from "../redux/slices/projectSlice";
import ProjectList from "../components/ProjectList";
import AdminPanel from "../components/AdminPanel";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const projectsState = useSelector((state) => state.projects);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.currentUser) {
      navigate("/login");
    }
    dispatch(loadProjects());
  }, [dispatch, user.currentUser, navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.currentUser}</p>
      {user.role === "admin" && <AdminPanel />}
      <ProjectList
        projects={projectsState.items}
        loading={projectsState.loading}
      />
    </div>
  );
}

export default DashboardPage;
