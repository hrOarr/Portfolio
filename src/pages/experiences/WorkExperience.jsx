import React from "react";
import ExperienceCard from "../../components/experience/ExperienceCard";
import DSI from '../../assets/images/company-icons/dsi_icon.jpeg';
import {motion} from "framer-motion";
import './WorkExperience.scss';

const WorkExperience = () => {
    return (
        <div name="experiences" className="bg-gradient-to-r to-[#0e2439] from-slate-900 shadow-2xl">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col pt-16 lg:pt-20 max-w-7xl mx-auto p-5"
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
        role: 'Assistant Software Engineer',
        company: 'Dynamic Solution Innovators Ltd.',
        company_icon: DSI,
        companyUrl: '',
        start_time: 'Jan 2023',
        end_time: 'Present',
        location: 'Dhaka, Bangladesh',
        responsibilities: [
            'Worked on both backend and frontend for multiple microservices.',
            'Analyzed requirements and existing documentations, collaborated with BAs and QAs.',
            'Resolved customer-facing issues, bugs on both backend and frontend microservices.',
            'Compiled and assessed QA feedbacks to improve software performance.',
            'Effectively coordinated with cross-functional teams.'
        ]
    },
    {
        id: 2,
        role: 'Junior Software Engineer',
        company: 'Dynamic Solution Innovators Ltd.',
        company_icon: DSI,
        companyUrl: '',
        start_time: 'May 2021',
        end_time: 'Dec 2022',
        location: 'Dhaka, Bangladesh',
        responsibilities: [
            'Worked on both backend and frontend for multiple microservices.',
            'Analyzed requirements and existing documentations, collaborated with BAs and QAs.',
            'Resolved customer-facing issues, bugs on both backend and frontend microservices.',
            'Compiled and assessed QA feedbacks to improve software performance.',
            'Effectively coordinated with cross-functional teams.'
        ]
    }
];

export default WorkExperience;