import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProjectDetail() {
  const { id } = useParams();
  const project = useSelector((state) =>
    state.projects.items.find((proj) => proj.id === parseInt(id)),
  );

  if (!project) return <p>Project not found.</p>;

  return (
    <div>
      <h2>{project.title}</h2>
      <p>Status: {project.status}</p>
      <p>Description: {project.description}</p>
    </div>
  );
}

export default ProjectDetail;
