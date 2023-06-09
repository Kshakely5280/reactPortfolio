import React from 'react';
import Particles from './particles';

const Portfolio = () => {
  const projects = [
    {
      title: 'Portfolio V1',
      description: 'In our 2nd week of coding bootcamp, with little more than a basic knowledge of HTML and CSS, I built my first portfolio',
      githubLink: 'https://github.com/Kshakely5280/portolio_v1'
    },
    {
      title: 'Weather App',
      description: 'This was my first challenge that really offered a breakthrough for my knowledge. Being able to call APIs and return  information that you can filter and display dynamically really grabbed my excitement',
      githubLink: 'https://github.com/Kshakely5280/weather_app',
    },
    {
      title: 'Dew Drop Adventure',
      description: 'This project was myself, and my classmates first attempt at building a complete website with functional API calls while using the MVC format. We even discovered a new technology called Phaser which allowed me to build my first platform jumping game!',
      githubLink: 'https://github.com/Kshakely5280/MVC_project',
    },
        {
      title: 'Mongo Databases',
      description: 'This weeks challenge invited us to build from scratch a MVC style application that functions like the basic essentials of a social networking application. We have the ability to add and delete users, thoughts or "posts" and reply to those thoughts with "reactions". while there is no front end capabilities, this simulates the functionality of an extremely common feature for most websites, not only social media sites.',
      githubLink: 'https://github.com/Kshakely5280/MongoBongo',
    },
        {
      title: 'Employee Registry',
      description: 'This challenge was to highlight database queries using CRUD to interact with a database we created to house a mock company employee list. This challenge uses inquirer and my sql.!',
      githubLink: 'https://github.com/Kshakely5280/Employee_Registry',
    },
        {
      title: 'No Designer No Problem',
      description: 'This CLI app was made as a challenge during our Object Oriented programming week. This app uses new node libraries likke color for validating user input, as well as having a testing suite to run a basic test on our function makeSVG using Jest.',
      githubLink: 'https://github.com/Kshakely5280/no_designer_no_problem',
    },
  
  ];

  return (
    <div className="portfolio-container">
            <Particles className="particleContainer" />

      <h2 className="portfolio-title">Current Portfolio</h2>
      <p className="portfolio-about">
        Throughout my bootcamp journey, I have encountered some challenges that truly stumped me. There has been dozens of highs and lows at each step in this process, to reach this final stage has been an overwhelmingly satisfying achievement. Please take a moment to see below a handful of projects that are a representation of my growth and most proud coding accomplishments.
      </p>

      <h2 className="portfolio-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.githubLink} className="project-link">Click here to visit Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
