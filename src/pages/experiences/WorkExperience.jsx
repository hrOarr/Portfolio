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
        companyName: 'Dynamic Solution Innovators',
        company_icon: DSI,
        companyUrl: 'https://www.dsinnovators.com/',
        location: 'Dhaka, Bangladesh',
        startTime: 'May 2021',
        endTime: 'Present',
        roles: [
            {
                title: 'Software Engineer',
                start_time: 'August 2024',
                end_time: 'Present',
                responsibilities: [
                    'Worked on NotifyService for multiple tasks such as respond to Vonage inbound sms api (keywords like HELP, STOP, UNSTOP), deferred email update scheduler, reprocess stuck notification jobs, introduced US Sms number verification API with Vonage Basic Insight API support.',
                    'Enhanced image quality by optimizing image DPI in the Message Manager service.'
                ]
            },
            {
                title: 'Associate Software Engineer',
                start_time: 'August 2022',
                end_time: 'July 2024',
                responsibilities: [
                    'Configured Datadog to monitor infrastructure components like servers, containers, and databases, and integrated APM and log tracing for over 17 Java applications. Created customized dashboards to track historical metrics for these applications. Enhanced log formats to support both plain text and JSON, improving compatibility and traceability across the applications. Created datadog synthetic test to check dependent service health for over 10 Java applications.',
                    'Worked on NotifyService that processes sending bulk/batch notifications (Email, SMS). Several email servers such as postfix/zimbra are connected to send emails. SMS is sent via Vonage API. It also supports multiple APIs such as CSV files upload/download, report download, on-demand send notification, subscribe/unsubscribe, delivery-receipt callback (Vonage) etc. It uses TemplateService for Email/SMS templates.',
                    'Developed IndexFileProcessor service that processes index files (consists of user information, physical letter meta-data etc) to track the processing & delivery of letters via USPS service for 160+ US based banks.',
                    'Worked on Return Mail service that is used to process bulk return mails of the banks due to wrong address, zip code, or any other reasons. It processes and puts the generated CSV files (might be encrypted) into client pickup mount directory for the clients.',
                    'Developed SMS functionality for NotifyService using the Vonage Messages API and implemented a callback API to receive delivery status updates, allowing the database to be updated in real-time.',
                    'Worked on Event-driven microservice architecture with ActiveMQ Artemis to process events.',
                    'Wrote down Migration Scripts to migrate the data for both Oracle & MongoDB.',
                    'Trained & guided the Junior level engineers.'
                ]
            },
            {
                title: 'Junior Software Engineer',
                start_time: 'May 2021',
                end_time: 'July 2022',
                responsibilities: [
                    'Designed and implemented maintainable backend REST APIs for microservices, applying OOP concepts and SOLID principles.',
                    'Developed the Message Manager service, allowing admin users (US based banks) to add customizable text or image messages to specific sections of a PDF document, targeting end-users by group criteria for marketing or other purposes.',
                    'Worked with Java Server Pages (JSP) and Vue.js to support various frontend microservices. Analyzed requirements and documentation, coordinating efforts with Business Analysts and Quality Assurance teams.',
                    'Troubleshot and resolved customer-facing issues and bugs in both backend and frontend microservices.'
                ]
            }
        ]
    }
];

export default WorkExperience;