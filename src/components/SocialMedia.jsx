import React from "react";
import {FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";
import './SocialMedia.css';

const socialLinks = [
    {
        icon: 'fa-github',
        url: "https://github.com/hrOarr",
        color: 'bg-[#333]'
    },
    {
        icon: 'fa-linkedin-in',
        url: "https://www.linkedin.com/in/asfakul-ghani/",
        color: 'bg-[#0e76a8]'
    },
    {
        icon: 'fa-twitter',
        url: 'https://twitter.com/AsfakulG',
        color: 'bg-[#00acee]'
    },
    {
        icon: 'fa-facebook-f',
        url: 'https://www.facebook.com/aastrodust',
        color: 'bg-[#3b5998]'
    },
    {
        icon: 'fa-medium',
        url: 'https://medium.com/@astrodust',
        color: 'bg-[#000]'
    },
    {
        icon: 'fa-stack-overflow',
        url: 'https://stackoverflow.com/users/11820899/arbitrary-a',
        color: 'bg-[#f48024]'
    }
];

const SocialMedia = () => {
    return (
            <ul className="flex gap-3 md:gap-4">
                {
                    socialLinks && socialLinks.map((link)=>(
                        <li>
                            <a className={`flex w-10 h-10 md:w-11 md:h-11 text-white text-xl items-center justify-center rounded-full hover:bg-[#000000] ${link.color}`} href={link.url} target={'_blank'} rel='noreferrer'>
                                <i className={`fab ${link.icon}`}></i>
                            </a>
                        </li>
                    ))
                }
            </ul>
    );
};

export default SocialMedia;