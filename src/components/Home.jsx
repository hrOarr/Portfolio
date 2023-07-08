import React from "react";
import {BsDownload} from 'react-icons/bs';
import SocialMedia from "../components/SocialMedia";
import CV from '../assets/resumes/Asfakul-Ghani-CV.pdf';
import '../styles/Home.css';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="bg-gradient-to-r to-[#0e2439] from-slate-900 shadow-2xl"
        >
            <div className="flex pt-28 pb-16 md:pt-48 md:pb-24 max-w-7xl mx-auto p-5">
                <div>
                    <p className="text-indigo-500 leading-normal font-medium tracking-wide text-lg">Hi, I'm</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#fff] tracking-wide pt-2">Asfakul Ghani</h2>

                    <h3 className="leading-normal text-[#9cb3c9] text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black pt-2">Passionate software engineer solving problems</h3>

                    <div className="mt-8 md:mt-16">
                        <SocialMedia />
                    </div>

                    {/*<p className="pt-16 md:pt-20 text-gray-400 text-lg w-96 tracking-wide">I am excited to tackle challenges. I have experience of working on frontend, backend, and devops. </p>*/}
                    <div className="flex space-x-12 pt-8 md:pt-12">
                        <a href={CV} download>
                            <button
                                className="flex bg-indigo-500 text-white hover:bg-white hover:border-indigo-500 hover:text-indigo-500 hover:scale-105 hover:duration-300 font-medium px-3 py-3 md:px-4 rounded-md">
                                <BsDownload size={20}/>
                                <span className="pl-2 text-md uppercase">Download CV</span>
                            </button>
                        </a>

                        <Link to="about" smooth={true} duration={500}>
                            <button
                                className="flex bg-indigo-500 text-white hover:bg-white hover:border-indigo-500 hover:text-indigo-500 hover:scale-105 hover:duration-300 font-medium px-3 py-3 md:px-4 rounded-md uppercase">
                                <span className="uppercase text-md">About Me</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;