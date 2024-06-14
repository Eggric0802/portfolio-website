import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for project 1",
      imageUrl: "project1.jpg"
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      imageUrl: "project2.jpg"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.imageUrl} alt={project.title} />
        </div>
      ))}
    </section>
  );
}

export default Projects;
