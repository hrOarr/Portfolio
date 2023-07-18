import React from "react";
import {BsDownload} from 'react-icons/bs';
import SocialMedia from "../../components/SocialMedia";
import CV from '../../assets/resumes/Asfakul-Ghani-CV.pdf';
import './Home.css';
import {Link} from 'react-scroll';
import Cover from '../../assets/images/4140038.png';

const Home = () => {
    return (
        <div name="home" className="main-div"
        >
            <div className="flex pt-28 pb-16 md:pt-52 md:pb-24 md:max-w-7xl mx-auto p-5 md:p-4">
                <div className="md:flex space-y-8 md:space-y-0">
                    <div className="md:order-first basis-3/5">
                        <p className="text-indigo-500 font-medium tracking-wide text-lg">Hi, I'm</p>
                        <h2 className="name">Asfakul Ghani</h2>

                        <h3 className="role">Software engineer solving issue</h3>

                        <div className="mt-8 md:mt-20">
                            <SocialMedia/>
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
                    <div className="basis-2/5">
                        <img src={Cover} className="h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;