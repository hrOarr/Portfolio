import React from "react";
import './ExperienceCard.scss';

const ExperienceCard = ({experience}) => {
    return (
        <div
            className="mb-5 mt-2 tracking-wider rounded-md bg-secondary-light dark:bg-ternary-dark">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:order-2">
                <div
                    className="w-full h-52 flex items-center justify-center md:justify-start my-auto cursor-pointer"
                    onClick={() => window.open(experience.companyUrl || window.location, '_blank')}
                >
                    <img className="max-h-full max-w-full rounded-full shadow-sm" src={experience.company_icon}></img>
                </div>
                <div className="md:col-span-2 lg:col-span-3 my-auto p-2">
                    <div className="flex-col md:flex-row md:flex justify-between">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-[#fff] experience-text-company">{experience.company}</h3>
                            <div className="text-xl md:text-2xl experience-text-role text-[#fff] font-medium mb-3">{experience.role}</div>
                        </div>
                        <div className="lg:text-right text-[#fff] experience-text-date">
                            <p className="">{experience.location}</p>
                            <p className="">{experience.start_time} - {experience.end_time}</p>
                        </div>
                    </div>
                    {/*<hr className="border-gray-300 mb-4" />*/}
                    <div className="text-[#9cb3c9] experience-text-details text-md md:text-lg pt-2">
                        {/*<strong>Responsibilities</strong> <br/>*/}
                        <ul className="pt-1">
                        {
                            experience.responsibilities && experience.responsibilities.map((responsibility) => (
                                <li>{responsibility}</li>
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