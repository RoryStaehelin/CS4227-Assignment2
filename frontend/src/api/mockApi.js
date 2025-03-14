export function fetchProjects() {
  const mockProjects = [
    {
      id: 1,
      title: "AI Research",
      status: "Ongoing",
      description: "Exploring AI applications in healthcare.",
    },
    {
      id: 2,
      title: "Climate Policy Study",
      status: "Completed",
      description: "Analysis of climate change policies.",
    },
    {
      id: 3,
      title: "Quantum Computing",
      status: "Planned",
      description: "Future research on quantum computing.",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects);
    }, 500);
  });
}
