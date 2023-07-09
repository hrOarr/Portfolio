import React from "react";
import Experience from "../components/Experience";
import DSI from '../assets/images/company-icons/dsi_icon.jpeg';
import {motion} from "framer-motion";

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

const WorkingExperience = () => {

    return (
        <div name="experiences" className="bg-[#F9FAFB]">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col pt-16 lg:pt-20 max-w-7xl mx-auto p-5"
            >
                <h4 className="text-5xl lg:text-6xl pb-8 text-gray-800 font-normal">Experiences</h4>
                {
                    experiences && experiences.map((experience) => (
                        <Experience experience={experience}/>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default WorkingExperience;