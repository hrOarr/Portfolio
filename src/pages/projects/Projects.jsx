import React from "react";
import {motion} from "framer-motion";
import ProjectCard from "../../components/project/ProjectCard";
import './Projects.css';

const Projects = () => {
    return (
        <div name="projects" className="bg-[#fff]">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col py-16 lg:py-20 max-w-7xl mx-auto p-5"
            >
                <h3 className="title">Projects</h3>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                    {
                        projects && projects.map((project) => (
                            <ProjectCard project={project}/>
                        ))
                    }
                </div>

                <div className="flex items-center justify-center pt-12">
                    <a href="https://github.com/hrOarr" target={'_blank'} rel='noreferrer'>
                        <button
                            className="button-more">
                            <span className="uppercase text-md">More Projects</span>
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

const projects = [
    {
        id: 1,
        title: 'Idle Time Minimization of Uber Driver',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5315c20d0c240f/hrOarr/Idle-Time-Minimization-of-Uber-Driver",
        description: 'It provides an optimal location for Uber driver based on previous stats, current day and times',
        color: 'bg-[#e36c22]',
        languages: ['HTML', 'Python', 'Django'],
        link: 'https://github.com/hrOarr/Idle-Time-Minimization-of-Uber-Driver'
    },
    {
        id: 2,
        title: 'Graph Algorithm Visualizer',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5315c20d0c240h/hrOarr/Path-finder-visualizer",
        description: 'A React web visualizer that helps to visualize algorithms like dfs, bfs, dijkstra, bellman-ford, spfa',
        color: 'bg-[#f5e571]',
        languages: ['Javascript', 'React'],
        link: 'https://github.com/hrOarr/Path-finder-visualizer'
    },
    {
        id: 3,
        title: 'FamilyStoryBook Backend',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5315c20d0c240h/hrOarr/familyStoryBook_Backend",
        description: 'An API service that offers a good variety of features support for family tree',
        color: 'bg-[#9c7911]',
        languages: ['Java', 'Spring Boot'],
        link: 'https://github.com/hrOarr/familyStoryBook_Backend'
    },
    {
        id: 4,
        title: 'FamilyStoryBook Frontend',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5315c20d0c240h/hrOarr/familyStoryBook_frontend",
        description: 'A family tree where one can manage everything at one place along with details like member-info (education, job, achievement), family documents etc.',
        color: 'bg-[#f5e571]',
        languages: ['Javascript', 'React'],
        link: 'https://github.com/hrOarr/familyStoryBook_frontend'
    }
];

export default Projects;