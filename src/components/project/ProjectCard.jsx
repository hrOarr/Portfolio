import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import './ProjectCard.css';

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
            {/*<Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}>*/}
            {/*    {*/}
            {/*        project.images.map((image) => (*/}
            {/*            <a href={project.link} target={'_blank'} rel='noreferrer'>*/}
            {/*                <div>*/}
            {/*                    <img alt="" src={image} className="preview-img h-45"/>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Carousel>*/}

            <div className="p-4">
                <h4 className="project-title">
                    <a href={project.link} target={'_blank'} rel='noreferrer'>
                        {project.title}
                    </a>
                </h4>
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