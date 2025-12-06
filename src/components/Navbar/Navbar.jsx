import React from 'react';
import { RiPlantLine } from 'react-icons/ri';
import { NavNames } from '../../dummyData/NavNames.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { motion } from 'framer-motion';
import Cursor from '../Cursor/Cursor.jsx';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-between items-center py-6 bg-green-900"
                >
                    <div className="text-2xl text-white flex px-2 items-center gap-2 font-bold">
                        <RiPlantLine className="text-3xl text-secondary" size={30} color="white" />
                        <p>GROPHIA</p>
                    </div>
                    <div className="hidden lg:block px-3">
                        <ul className="flex items-center gap-6">
                            <Cursor />
                            {NavNames.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.link}
                                        className="inline-block text-white text-sm xl:text-base py-1 px-2 xl:px-3  hover:text-gray-300 transition-all duration-300 font-semibold"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <GiHamburgerMenu className="text-white lg:hidden mr-4" size={28} />
                    </div>
                </motion.div>
            </nav>
            <ResponsiveMenu open={isOpen} />
        </>
    );
}
