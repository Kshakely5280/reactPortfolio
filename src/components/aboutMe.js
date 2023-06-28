import React, { useState } from "react";
import Particles from "./particles";

const AboutMe = () => {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
  };

  return (
    <div className="aboutContainer">
      <Particles className="particleContainer" />
      <div className="contentContainer">
        <div className="textDiv">
          {!showContent}
          {showContent && (
            <>
              <p>
                Hi there! My name is Kyle Shakely, and I'm an aspiring
                programmer. Welcome to my coding portfolio website!
              </p>
              <p>
                Apart from coding, I have a deep passion for cars, hiking, and
                camping. Exploring the great outdoors, breathing in fresh
                mountain air, and challenging myself on scenic trails are some
                of the things that truly invigorate me.
              </p>
              <p>
                I'm fascinated by the art of coding and the limitless
                possibilities it offers. With a strong desire to create
                innovative solutions and bring ideas to life, I am constantly
                honing my skills in various programming languages and
                technologies. Through my projects and experiences, I aim to
                showcase my problem-solving abilities and passion for clean,
                efficient code.
              </p>
              <p>
                I'm excited about the journey ahead as I continue to learn and
                grow as a programmer. Feel free to explore my portfolio and get
                in touch with me if you'd like to collaborate or discuss any
                opportunities. Let's create something incredible together!
              </p>
            </>
          )}
          {!showContent && (
            <button className="button"onClick={handleClick}>Welcome, Click Here</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

