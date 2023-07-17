import React from "react";
import {BsDownload} from 'react-icons/bs';
import SocialMedia from "../../components/SocialMedia";
import CV from '../../assets/resumes/Asfakul-Ghani-CV.pdf';
import './Home.scss';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="main-div"
        >
            <div className="flex pt-28 pb-16 md:pt-48 md:pb-24 sm:items-center md:max-w-7xl mx-auto p-5">
                <div>
                    <p className="text-indigo-500 font-medium tracking-wide text-lg">Hi, I'm</p>
                    <h2 className="name">Asfakul Ghani</h2>

                    <h3 className="role">Software engineer solving problems</h3>

                    <div className="mt-8 md:mt-16">
                        <SocialMedia />
                    </div>

                    <div className="flex space-x-4 md:space-x-10 pt-12 md:pt-14">
                        <a href={CV} download>
                            <button
                                className="flex button-primary">
                                <BsDownload size={20}/>
                                <span className="pl-2 text-md">Download CV</span>
                            </button>
                        </a>

                        <Link to="about" smooth={true} duration={500}>
                            <button
                                className="button-primary">
                                <span className="text-md">About Me</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;