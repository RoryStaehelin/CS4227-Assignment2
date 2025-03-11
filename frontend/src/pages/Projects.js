import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Simulate fetching projects from an API with dummy data
  useEffect(() => {
    const dummyProjects = [
      {
        id: 1,
        title: "Project Alpha",
        description: "A research project on AI.",
      },
      {
        id: 2,
        title: "Project Beta",
        description: "Exploring renewable energy solutions.",
      },
    ];
    setProjects(dummyProjects);
  }, []);

  return (
    <div>
      <h2>Research Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
