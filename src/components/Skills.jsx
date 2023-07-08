import React from 'react';
import ActiveMQ from '../assets/images/dev-icons/apache_activemq_icon.svg';
import Hibernate from '../assets/images/dev-icons/hibernate_icon.svg';
import {motion} from "framer-motion";

// f2f4ff

const Skills = () => {
    return (
        <div className="" id="skills">
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                        className="flex flex-col py-20 max-w-7xl mx-auto p-10"
            >
                <div className="text-5xl md:text-6xl text-gray-700">
                    Technologies I worked on
                </div>
                <div className="pb-12 pt-4 text-xl text-gray-500 uppercase tracking-wide">
                    As a Software Engineer, I like to explore every tech stack
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill) => {
                        return (
                            <div className="flex space-x-2 items-center justify-center hover:bg-white shadow-[2px_0px_2px_0px_#303e7a] p-4">
                                {skill.icon && <div className="text-2xl">{skill.icon}</div>}
                                {skill.img && <img src={skill.img} className="h-7 w-7" alt=""></img>}
                                <div className="text-gray-500 text-lg">{skill.skill}</div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}

const skills = [
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        skill: 'C',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        skill: 'C++',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        skill: 'Java',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        skill: 'JavaScript',
    },
    {
        icon: <i class="devicon-spring-plain colored"></i>,
        skill: 'Spring Boot',
    },
    {
        icon: <i class="devicon-react-original colored"></i>,
        skill: 'React',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        skill: 'Vuejs',
    },
    {
        img: Hibernate,
        skill: 'Hibernate',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        skill: 'MongoDB',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        skill: 'MySQL'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
        skill: 'Oracle'
    },
    {
        icon: <i class="devicon-tailwindcss-plain colored"></i>,
        skill: 'Tailwind CSS',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        skill: 'Git',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        skill: 'Docker',
    },
    {
        icon: <i class="devicon-nginx-original colored"></i>,
        skill: "Nginx"
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        skill: "Jenkins"
    },
    {
        img: ActiveMQ,
        skill: "ActiveMQ Artemis"
    }
];

export default Skills;