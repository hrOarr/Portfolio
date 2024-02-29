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
                title: 'Associate Software Engineer',
                start_time: 'August 2023',
                end_time: 'Present',
                responsibilities: [
                    'Integrated Datadog synthetic test to check service health for 10+ Java applications.',
                    'Worked on Job processing to send bulk notifications, multiple schedulers related to notification jobs and clean-up script to delete old data in NotifyService.',
                    'Developed the Spring applications with Spring Boot to update & upgrade.',
                    'Trained & guided the Junior level engineers.'
                ]
            },
            {
                title: 'Assistant Software Engineer',
                start_time: 'July 2022',
                end_time: 'July 2023',
                responsibilities: [
                    'Setup Datadog to monitor the infrastructures such as server, container, database etc.',
                    "Integrated Datadog APM, Log tracing for 17+ Java applications and created dashboards for various applications to monitor historical metrices.",
                    'Worked with Vonage Messages API to send SMS, and integrated callback to get delivery-receipt status and webhooks to receive inbound messages to respond accordingly.',
                    'Worked on Event-driven microservice architecture with ActiveMQ Artemis.',
                    'Wrote down several Migration Scripts to migrate the data for both Oracle & MongoDB.'
                ]
            },
            {
                title: 'Junior Software Engineer',
                start_time: 'May 2021',
                end_time: 'June 2022',
                responsibilities: [
                    'Developed maintainable backend REST APIs for several microservices, followed by OOP concepts and SOLID principles.',
                    'Re-architected microservice applications from Spring to Spring Boot.',
                    'Worked with Java Server Page (JSP) and Vue.js in various frontend microservices.',
                    'Analyzed requirements and existing documentations, collaborated with BAs and QAs.',
                    'Resolved customer-facing issues, bugs on both backend and frontend microservices.'
                ]
            }
        ]
    }
];

export default WorkExperience;