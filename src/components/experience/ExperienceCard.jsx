import React from "react";
import './ExperienceCard.css';

const ExperienceCard = ({experience}) => {
    return (
        <div
            className="mb-5 mt-4 tracking-wider rounded-md bg-secondary-light dark:bg-ternary-dark">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:order-2">
                <div
                    className="w-full h-52 flex justify-center md:justify-start"
                >
                    <a href={experience.companyUrl} target={'_blank'} rel='noreferrer'>
                        <img className="max-h-full max-w-full rounded-full shadow-sm"
                             src={experience.company_icon}></img>
                    </a>
                </div>
                <div className="md:col-span-2 lg:col-span-3 my-auto p-2">
                    <div className="flex-col justify-between">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-[#fff] experience-text-company">{experience.companyName}</h3>
                        </div>
                        <div className="text-left text-[#8897a6] experience-text-date pt-1">
                            <p className="">{experience.location} | {experience.startTime} - {experience.endTime}</p>
                        </div>
                    </div>

                    <div className="role-main mt-8">
                        <ul className="role-list">
                            {
                                experience.roles && experience.roles.map((role) => (
                                    <li className="role-item">
                                        <div
                                            className="text-xl md:text-2xl experience-text-role text-[#fff] font-medium">{role.title}</div>
                                        <p className="text-[#8897a6] experience-text-date">{role.start_time} - {role.end_time}</p>

                                        <div
                                            className="text-[#9cb3c9] experience-text-details text-md md:text-lg pt-4 leading-normal">
                                            <ul className="pt-1">
                                                {
                                                    role.responsibilities && role.responsibilities.map((responsibility) => (
                                                        <li className="pt-2">{responsibility}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="experience-card-border"></div>
        </div>
    );
};

export default ExperienceCard;