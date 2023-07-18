import React from 'react';
import ActiveMQ from '../../assets/images/dev-icons/apache_activemq_icon.svg';
import Hibernate from '../../assets/images/dev-icons/hibernate_icon.svg';
import {motion} from "framer-motion";
import SkillCard from "../../components/skill/skillCard";
import './Skills.css';

const Skills = () => {
    return (
        <div className="bg-[#fff]" id="skills">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col py-16 lg:py-20 max-w-7xl mx-auto p-5"
            >
                <div className="skills-title">
                    Technologies I worked on
                </div>
                <div className="skills-subtitle">
                    As a Software Engineer, I like to explore every tech stack
                </div>

                {
                    skills.map((skill, idx)=>{
                        return (
                        <div className={"flex flex-col " + (idx>0) ? "pt-8":""}>
                            <h4 className="text-2xl font-bold tracking-wide leading-tight pb-3">{skill.name}</h4>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {
                                    skill.sets && skill.sets.map((s) => (
                                        <SkillCard skill={s}/>
                                    ))
                                }
                            </div>
                        </div>
                        )
                    })
                }
            </motion.div>
        </div>
    );
};

const skills = [
    {
        name: 'Languages',
        sets: [
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
                name: 'C',
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
                name: 'C++',
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                name: 'Java',
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                name: 'JavaScript',
            }
        ]
    },
    {
        name: 'Frontend Development',
        sets: [
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                name: 'HTML'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                name: 'CSS'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                name: 'JavaScript'
            },
            {
                icon: <i class="devicon-react-original colored" />,
                name: 'React'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                name: 'Vue'
            },
            {
                icon: <i class="devicon-tailwindcss-plain colored" />,
                name: 'Tailwind CSS'
            },
            {
                icon: <i className="devicon-bootstrap-plain colored"/>,
                name: 'Bootstrap'
            }
        ]
    },
    {
        name: 'Backend Development',
        sets: [
            {
                icon: <i class="devicon-spring-plain colored" />,
                name: 'Spring Boot'
            },
            {
                icon: <i class="devicon-django-plain colored" />,
                name: 'Django'
            }
        ]
    },
    {
        name: 'Databases',
        sets: [
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                name: 'MySQL'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
                name: 'Oracle'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                name: 'MongoDB',
            }
        ]
    },
    {
        name: 'DevOps',
        sets: [
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                name: 'Git'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                name: 'Docker'
            },
            {
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
                name: "Jenkins"
            }
        ]
    },
    {
        name: 'Web Services and APIs',
        sets: [
            {
                img: '',
                name: 'Restful APIs'
            }
        ]
    }
]

const skills2 = [
    {
        img: Hibernate,
        skill: 'Hibernate',
    },
    {
        icon: <i class="devicon-nginx-original colored"></i>,
        skill: "Nginx"
    },
    {
        img: ActiveMQ,
        skill: "ActiveMQ Artemis"
    }
];

export default Skills;