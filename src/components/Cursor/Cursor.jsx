import React from 'react';
import { useState, useEffect } from 'react';
import { GiWateringCan } from 'react-icons/gi';
import { motion } from 'framer-motion';

function Cursor() {
    const [isWatering, setIsWatering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const animationVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isWatering]);

    useEffect(() => {
        document.body.style.cursor = isWatering ? 'none' : 'auto';

        return () => {
            document.body.style.cursor = 'auto';
        };
    }, [isWatering]);

    return (
        <>
            <motion.button
                variants={animationVariants}
                whileHover={{
                    backgroundColor: 'var(--surface-secondary)',
                    color: '#2563eb',
                    scale: 1.05,
                    transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                initial="hidden"
                animate="visible"
                className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg"
                onClick={() => {
                    setIsWatering(!isWatering);
                }}
            >
                {isWatering ? 'Finish' : <GiWateringCan />}
            </motion.button>
            {isWatering && (
                <img
                    src="/watering_can-2-p0.svg"
                    alt="Watering Can Cursor"
                    style={{
                        position: 'fixed',
                        top: mousePos.y + 10 + 'px',
                        left: mousePos.x + 10 + 'px',
                        width: '120px',
                        height: '120px',
                        pointerEvents: 'none',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                    }}
                />
            )}
        </>
    );
}

export default Cursor;
