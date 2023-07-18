import React from "react";
import './ProjectCard.css';

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
            <img alt="" src={project.preview} className="preview-img h-45"/>

            <div className="p-4">
                <a href={project.link} target={'_blank'} rel='noreferrer'>
                    <h4 className="project-title">
                        {project.title}
                    </h4>
                </a>
                <p className="project-description">
                    {project.description}
                </p>

                <div className="flex pt-4">
                    <ul className="flex project-languages">
                        {
                            project.languages && project.languages.map((language) => (
                                <li>
                                    <span className={`inline-block w-2 h-2 rounded-full ${project.color}`}></span>
                                    <span className="ml-2">{language}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;