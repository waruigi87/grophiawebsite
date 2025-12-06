import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

function NavbarBanner() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {isOpen && (
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-yellow-400 hidden lg:block relative text-black text-center py-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    新しい製品が発売されました！ 詳細は
                    <a href="#" className="text-blue-700">
                        こちらへ
                    </a>
                    <div
                        className="text-black absolute top-1/2 right-5 cursor-pointer -translate-y-1/2
        "
                        onClick={() => setIsOpen(false)}
                    >
                        X
                    </div>
                </motion.div>
            )}
        </>
    );
}

export default NavbarBanner;
