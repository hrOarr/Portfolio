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
                    'Improved the image quality with image DPI in Message Manager application.'
                ]
            },
            {
                title: 'Associate Software Engineer',
                start_time: 'July 2022',
                end_time: 'July 2024',
                responsibilities: [
                    'Integrated Datadog APM, Log tracing for 17+ Java applications and created dashboards for various applications to monitor historical metrics, and synthetic test to check dependent services health for 10+ Java applications.',
                    'Worked on NotifyService that processes sending bulk/batch notifications (Email, SMS). Several email servers such as postfix/zimbra are connected to send emails. SMS is sent via Vonage API. It also supports multiple APIs such as CSV files upload/download, report download, on-demand send notification, subscribe/unsubscribe, delivery-receipt callback (Vonage) etc. It uses TemplateService for Email/SMS templates.',
                    'Re-developed IndexFileProcessor service that processes index files for 160+ US based banks which consists of user information, physical letter meta-data etc. to track the processing & delivery of letters via USPS service.',
                    'Worked on Return Mail service that is used to process bulk return mails of the banks due to wrong address, zip code, or any other reasons. It processes and puts the generated CSV files (might be encrypted) into client pickup mount directory for the clients.',
                    'Introduced Vonage Callback API to get delivery receipt status of SMS and update the database with proper status accordingly.',
                    'Worked on Event-driven microservice architecture with ActiveMQ Artemis.',
                    'Wrote down Migration Scripts to migrate the data for both Oracle & MongoDB.',
                    'Trained & guided the Junior level engineers.'
                ]
            },
            {
                title: 'Junior Software Engineer',
                start_time: 'May 2021',
                end_time: 'June 2022',
                responsibilities: [
                    'Developed maintainable backend REST APIs for several microservices, followed by OOP concepts and SOLID principles.',
                    'Developed Message Manager service that enables the admin users (US based banks) to set text/image messages in a customizable areas of a PDF document to the end-users (targeted/default group based on certain criterias) for marketing or other purposes.',
                    'Worked with Java Server Page (JSP) and Vue.js in various frontend microservices.',
                    'Analyzed requirements and existing documentations, collaborated with BAs and QAs.',
                    'Resolved customer-facing issues, bugs on both backend and frontend microservices.'
                ]
            }
        ]
    }
];

export default WorkExperience;