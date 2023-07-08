import React, {useEffect, useState} from "react";
import './header.css';
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const menuList = [
    {
        name: 'home'
    },
    {
        name: 'experiences'
    },
    {
        name: 'projects'
    },
    {
        name: 'skills'
    },
    {
        name: 'problem-solving'
    },
    {
        name: 'blogs'
    }
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('home');
    const toggleDrawer = () => setIsOpen(!isOpen);
    const changeActiveMenu = (menu) => setActiveMenu(menu);

    // handling screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) { // Adjust the breakpoint as needed
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <nav
                className="fixed w-full flex px-6 py-4 justify-end transparent items-center bg-gradient-to-r to-[#0e2439] from-slate-900 text-gray-300 z-10">
                <ul className="hidden md:flex gap-x-8">
                    {
                        menuList && menuList.map((menu) => (
                            <li className="text-lg tracking-wider cursor-pointer hover:scale-105 hover:text-gray-400">
                                <Link to={menu.name} smooth={true} duration={500}
                                      onClick={() => changeActiveMenu(menu.name)}><span
                                    className="uppercase">{menu.name}</span></Link>
                            </li>
                        ))
                    }
                </ul>

                <div onClick={toggleDrawer} className="md:hidden z-10">
                    {!isOpen ? <FaBars/> : <FaTimes/>}
                </div>

                <div className="bg-[#0e2439]">
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                        lockBackgroundScroll={true}
                        style={{backgroundColor: '#0e2439'}}
                    >
                        <ul className={!isOpen ? "hidden" : "flex flex-col justify-center items-center py-12 sm:py-20 gap-y-8"}>
                            {
                                menuList && menuList.map((menu) => (
                                    <li className="text-lg tracking-wider cursor-pointer duration-200 hover:scale-105 hover:text-gray-400">
                                        <Link to={menu.name} smooth={true} duration={500}
                                              onClick={() => changeActiveMenu(menu.name)}><span
                                            className="uppercase">{menu.name}</span></Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Drawer>
                </div>
            </nav>
        </div>
    );
};

export default Header;