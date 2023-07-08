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
            'Responsible to handle the Frontend as well as Backend.',
            'Implement new features to the apps.',
            'Implement new features to the apps.',
            'Implement new features to the apps.',
            'Implement new features to the apps.'
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
            'Responsible to handle the Frontend as well as Backend.',
            'Implement new features to the apps.',
            'Implement new features to the apps.'
        ]
    }
];

const WorkingExperience = () => {

    return (
        <div name="experiences" className="bg-[#F9FAFB]">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col pt-20 max-w-7xl mx-auto p-10"
            >
                <h4 className="text-5xl md:text-6xl text-gray-700 pb-5">Experiences</h4>
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