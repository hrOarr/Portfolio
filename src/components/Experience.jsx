import React from "react";

const Experience = ({experience}) => {
    return (
        <div
            className="mb-5 mt-2 p-8 tracking-wider bg-[#FFFFFF] rounded-md hover:shadow-lg shadow-[0px_2px_0px_1px_#3F51B5] bg-secondary-light dark:bg-ternary-dark">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:order-2">
                <div
                    className="w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer"
                    onClick={() => window.open(experience.companyUrl || window.location, '_blank')}
                >
                    <img className="max-h-full max-w-full rounded-md" src={experience.company_icon}></img>
                </div>
                <div className="md:col-span-2 lg:col-span-3 my-auto">
                    <div className="flex-col lg:flex-row md:flex justify-between">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-[#000000]">{experience.company}</h3>
                            <div className="text-xl md:text-2xl text-[#000000] font-medium mb-3">{experience.role}</div>
                        </div>
                        <div className="lg:text-right text-[#6e859c] text-lg">
                            <p className="">{experience.location}</p>
                            <p className="">{experience.start_time} - {experience.end_time}</p>
                        </div>
                    </div>
                    {/*<hr className="border-gray-300 mb-4" />*/}
                    <div className="text-gray-600 text-md md:text-lg">
                        <strong>Responsibilities</strong><br/>
                        {
                            experience.responsibilities && experience.responsibilities.map((responsibility) => (
                                <li>{responsibility}</li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;