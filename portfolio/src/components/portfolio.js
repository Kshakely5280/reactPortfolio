import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      githubLink: 'https://github.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      githubLink: 'https://github.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      githubLink: 'https://github.com/project3',
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h2>Current Portfolio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus arcu ac metus
        placerat, eget mattis felis fermentum. Suspendisse faucibus mi at arcu hendrerit, sed
        blandit felis rutrum. Sed efficitur pulvinar velit, id pretium eros feugiat vitae.
        Suspendisse consequat luctus elit, non tempus neque dictum eu. Fusce vel luctus enim.
      </p>

      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink}>GitHub Repo</a>
            {/* Add additional info section here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
