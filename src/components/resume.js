import React from 'react';
import Particles from './particles';


const Resume = () => {
  const codingTopics = [
    'HTML',
    'CSS',
    'JavaScript',
    'Web APIs',
    'Third-Party APIs',
    'Server-Side APIs',
    'Node.js',
    'Express.js',
    'Object-Oriented Programming',
    'SQL',
    'Object Relational Mapping (ORM)',
    'MVC (Model-View-Controller)',
    'MongoDB',
    'Progressive Web Apps (PWAs)',
    'React',
  ];

  return (
    <div className="resume-container">
        <Particles className="particleContainer" />
      <h2 className="resume-title">Resume Details</h2>
      <h3 className="resume-subtitle">Coding bootcamp Topics Covered</h3>
      <ul className="resume-topics-list">
        {codingTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <a className='resumeLink' href='https://drive.google.com/drive/folders/1TvwZQVVzVTex9QjaiKYVvncPLBxORJSe?usp=sharing'>View Resume</a>
    </div>
  );
};

export default Resume;
