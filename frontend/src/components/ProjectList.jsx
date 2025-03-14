import React from "react";
import { Link } from "react-router-dom";

function ProjectList({ projects, loading }) {
  if (loading) return <p>Loading projects...</p>;

  return (
    <div>
      <h3>Projects</h3>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.title}</Link> -{" "}
              {project.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
