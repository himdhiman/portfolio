import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const renderCard = props.projects.map((project) => {
    var image =
      "https://github.com/himdhiman/portfolio/blob/master/src/components/Homepage/projects/" +
      project.imagesrc +
      "?raw=true";
    return (
      <div key={project.projectname}>
        <div className="column" id="project-card">
          <div className="ui segment">
            <div className="ui card">
              <div className="image">
                <img id="card-img" src={image} alt=""></img>
              </div>
              <div className="content">
                <div className="header">{project.projectname}</div>
              </div>
              <div className="meta">{project.description}</div>
              <div className="extra content">{project.frameworks}</div>
              <div className="extra content">
                {project.link == "NULL" ? (
                  <a href={project.projectlink}> Project Demo</a>
                ) : (
                  <Link to={project.link}>Project Demo</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment" id="project-card-container">
      <div className="ui equal width centered grid">{renderCard}</div>
    </div>
  );
}

export default ProjectCard;
