import React from "react";
import { PageContainer } from "./style";

const Projects = () => {
  return (
    <PageContainer id="projects">
      <div className="leaf-container">
        <img src="images/leafy-branch.png"></img>
      </div>
      <h2>Projects</h2>
      <div className="projects-wrapper">
        <div className="project-container">
          <a href="https://crownshopping.netlify.app" target="_blank">
            <img src="images/crownclothing.png"></img>
            <p>e-commerce</p>
          </a>
        </div>
        <div className="project-container">
          <a href="https://travelagencytours.netlify.app" target="_blank">
            <img src="images/tours.png"></img>
            <p>travel agency</p>
          </a>
        </div>
        <div className="project-container">
          <a href="https://gastronomy.netlify.app/" target="_blank">
            <img src="images/gastronomy.png"></img>
            <p>gastronomy</p>
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default Projects;
