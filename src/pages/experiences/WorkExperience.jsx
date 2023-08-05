import React from "react";
import ExperienceCard from "../../components/experience/ExperienceCard";
import DSI from '../../assets/images/company-icons/dsi_icon.jpeg';
import {motion} from "framer-motion";
import './WorkExperience.css';

const WorkExperience = () => {
    return (
        <div name="experiences" className="bg-[#0e2439]">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col pt-4 lg:pt-8 max-w-7xl mx-auto p-5"
            >
                <h4 className="experience-title">Experiences</h4>
                {
                    experiences && experiences.map((experience) => (
                        <ExperienceCard experience={experience}/>
                    ))
                }
            </motion.div>
        </div>
    );
};

const experiences = [
    {
        id: 1,
        company: 'Dynamic Solution Innovators Ltd.',
        company_icon: DSI,
        companyUrl: 'https://www.dsinnovators.com/',
        location: 'Dhaka, Bangladesh',
        roles: [
            {
                title: 'Assistant Software Engineer',
                start_time: 'Jan 2023',
                end_time: 'Present',
                responsibilities: [
                    'Updated & upgraded the old microservices (version, dependencies and code update).',
                    'Worked in Datadog integration (APM and log integration).',
                    'Resolved customer-facing issues, bugs on both backend and frontend microservices.',
                    'Effectively coordinated with cross-functional teams.'
                ]
            },
            {
                title: 'Junior Software Engineer',
                start_time: 'May 2021',
                end_time: 'Dec 2022',
                responsibilities: [
                    'Worked on both backend and frontend for multiple microservices.',
                    'Analyzed requirements and existing documentations, collaborated with BAs and QAs.',
                    'Resolved customer-facing issues, bugs on both backend and frontend microservices.',
                    'Compiled and assessed QA feedbacks to improve software performance.',
                    'Effectively coordinated with cross-functional teams.'
                ]
            }
        ]
    }
];

export default WorkExperience;