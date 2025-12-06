import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-cover bg-center h-screen relative"
                style={{
                    backgroundImage: "url('/ホームページ背景画像_Hero1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '80vh',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
                <div className="relative z-10 items-center justify-center h-full flex flex-col gap-6">
                    <div className="container">
                        <motion.h1
                            whileHover={{ opacity: [0.5, 1] }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            className="font-bold
                     text-white
                     text-4xl
                     sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl mb-6
                     "
                        >
                            人が育つ場に、共に育つ緑を
                        </motion.h1>
                        <button className="bg-green-700 text-white rounded-full hover:scale-110 transition-transform px-3 py-3">
                            ストアへ
                        </button>
                    </div>
                </div>
                <div></div>
            </motion.div>
        </>
    );
}

export default Hero;
