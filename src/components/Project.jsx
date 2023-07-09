import React from "react";
import {motion} from "framer-motion";

const projects = [
    {
        id: 1,
        title: 'Idle Time Minimization of Uber Driver',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5310c20d0c240f/hrOarr/Idle-Time-Minimization-of-Uber-Driver",
        description: 'It provides an optimal location for Uber driver based on previous stats, current day and times',
        color: 'bg-[#e36c22]',
        languages: ['HTML', 'Python', 'Django'],
        link: 'https://github.com/hrOarr/Idle-Time-Minimization-of-Uber-Driver'
    },
    {
        id: 2,
        title: 'Graph Algorithm Visualizer',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5310c20d0c240h/hrOarr/Path-finder-visualizer",
        description: 'A React web visualizer that helps to visualize algorithms like dfs, bfs, dijkstra, bellman-ford, spfa',
        color: 'bg-[#f5e571]',
        languages: ['Javascript', 'React'],
        link: 'https://github.com/hrOarr/Path-finder-visualizer'
    },
    {
        id: 3,
        title: 'FamilyStoryBook Backend',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5310c20d0c240h/hrOarr/familyStoryBook_Backend",
        description: 'An API service that offers a good variety of features support',
        color: 'bg-[#9c7911]',
        languages: ['Java', 'Spring Boot'],
        link: 'https://github.com/hrOarr/familyStoryBook_Backend'
    },
    {
        id: 4,
        title: 'FamilyStoryBook Frontend',
        preview: "https://opengraph.githubassets.com/003b70e7719a56fc2ea20cff90bc658b1d9bf1c18f5a3d790f5310c20d0c240h/hrOarr/familyStoryBook_frontend",
        description: 'A family tree where one can manage everything at one place along with details like member-info (education, job, achievement), family documents etc.',
        color: 'bg-[#f5e571]',
        languages: ['Javascript', 'React'],
        link: 'https://github.com/hrOarr/familyStoryBook_frontend'
    }
];

const Project = () => {
    return (
        <div name="projects" className="bg-[#F9FAFB]">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col py-16 lg:py-20 max-w-7xl mx-auto p-5"
            >
                <h3 className="text-5xl lg:text-6xl text-gray-800 font-normal pb-10">Projects</h3>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        projects && projects.map((project) => (
                            <div className="rounded relative bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] overflow-hidden">
                                <img alt="" src={project.preview} className="w-full h-36 transform
                                        transition duration-1000 hover:scale-105"/>

                                <div className="p-4">
                                    <a href={project.link} target={'_blank'} rel='noreferrer'>
                                        <h4 className="text-2xl font-semibold text-black">
                                            {project.title}
                                        </h4>
                                    </a>
                                    <p className="text-gray-600 pt-2 pb-2">
                                        {project.description}
                                    </p>

                                    <div className="flex pt-4">
                                        <ul className="flex items-center space-x-4 absolute bottom-2">
                                            {
                                                project.languages && project.languages.map((language) => (
                                                    <li>
                                                        <span
                                                            className={`inline-block w-2 h-2 rounded-full ${project.color}`}></span>
                                                        <span className="ml-2">{language}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center justify-center pt-12">
                    <a href="https://github.com/hrOarr" target={'_blank'} rel='noreferrer'>
                        <button
                            className="flex bg-indigo-500 text-white hover:bg-white hover:border-2 hover:border-indigo-500 hover:text-indigo-500 hover:scale-105 hover:duration-300 font-medium px-3 py-3 md:px-4 rounded-md uppercase">
                            <span className="uppercase text-md">More Projects</span>
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Project;