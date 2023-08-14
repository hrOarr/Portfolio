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
            <div className="flex pt-28 pb-10 md:pt-36 lg:pt-44 xl:pt-52 md:pb-14 md:max-w-7xl mx-auto p-5 md:p-4">
                <div>
                    <div className="md:flex greeting-main md:text-start text-center">
                        <div className="">
                        <div className="text-indigo-500 font-medium tracking-wide text-lg">Hi, I'm</div>
                        <div className="name">Asfakul Ghani</div>

                        <div className="role">A Software engineer with a flair for problem-solving, coding, and creating efficient solutions for complex challenges.</div>

                        <div className="mt-8 md:mt-14">
                            <SocialMedia/>
                        </div>

                        <div className="inline-flex space-x-6 md:space-x-10 pt-12 md:pt-14">
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
                    <div className="h-auto">
                        <img src={Cover} className="h-full w-full" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;