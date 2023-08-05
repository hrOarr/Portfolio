import React from 'react';
import {motion} from "framer-motion";
import SocialMedia from "../components/SocialMedia";
import Profile from '../assets/images/profile.jpg';

const AboutMe = () => {
    return (
        <div className="" id="about">
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 0.9, delay: 0.2}}
                        className="flex flex-col py-16 lg:py-20 max-w-7xl mx-auto p-5"
            >
                <div className="text-5xl lg:text-6xl text-gray-800 font-normal pb-12">
                    About Me
                </div>

                <div className="md:flex items-center space-y-8 md:space-y-0">
                    <div className="md:order-last basis-1/3 h-full">
                        <img
                            src={Profile}
                            className="rounded-full md:h-80 md:w-80 h-64 w-64 mx-auto"
                            alt=""
                        ></img>
                    </div>
                    <div className="basis-2/3 space-y-4">
                        <span className="text-gray-500 text-lg">Hi, It's </span>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#00000] tracking-wide pt-1">{profile.name}</h2>
                        <div className="text-xl text-gray-500 font-semibold">{profile.designation}</div>
                        <div className="font-light text-gray-600">
                            {profile.details}
                        </div>
                        <div className="font-light text-gray-600">
                            {profile.hobby}
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <SocialMedia />
                </div>

            </motion.div>
        </div>
    );
}

export default AboutMe;

const profile = {
    name: 'Asfakul Ghani',
    designation: 'Software Engineer',
    details: 'As a Software Engineer, I like to tackle the challenges and have passion for building efficient & scalable solutions. Skilled in full-stack development, ' +
        'I have experienced in designing and implementing software solutions by utilizing analytical and strong problem-solving skills.' +
        'With a continuous learning mindset, I stay up-to-date with latest industry trends and best practices. ' +
        'I want to contribute my expertise for creating impactful software solutions that drive positive change.',
    hobby: 'Love to play & watch sports (Cricket, Football)'
};