import React from 'react';
import { motion } from 'framer-motion';

function Members() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 1 },
    };

    const fadeAnimation = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const memberData = [
        {
            id: 1,
            name: '中山聖貴',
            role: 'CEO & Founder',
            roleja: '代表取締役兼創業者',
            ruby: 'なかやま きよたか',
            imgUrl: '/Business/TowerTennoji.jpg',
        },
        {
            id: 2,
            name: '富永 英也',
            role: 'CTO & Founder',
            roleja: '最高技術責任者兼創業者',
            ruby: 'とみなが ひでや',
            imgUrl: '/Business/TowerTennoji.jpg',
        },
        {
            id: 3,
            name: '中山 瑛文',
            role: 'Software Engineer',
            roleja: 'ソフトウェアエンジニア',
            ruby: 'なかやま あきふみ',
            imgUrl: '/Business/TowerTennoji.jpg',
        },
    ];
    return (
        <>
            <div className="surface-secondary">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={fadeAnimation}
                        initial="hidden"
                        whileInView="visible"
                        className="items-center text-center py-12 text-black"
                    >
                        <h1 className="text-4xl uppercase font-bold">Our Teams</h1>
                        <p>わたしたちのチーム</p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12"
                    >
                        {/* Member 1 */}
                        {memberData.map((member) => (
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -10 }}
                                key={member.id}
                                className="bg-white rounded-3xl shadow-lg p-6 text-center"
                            >
                                <img
                                    src={member.imgUrl}
                                    alt={member.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h2 className="text-2xl font-semibold mb-2">
                                    <ruby>
                                        {member.name}
                                        <rt className="text-xs text-gray-500">{member.ruby}</rt>
                                    </ruby>
                                </h2>
                                <p className="text-green-900 font-extrabold">{member.role}</p>
                                <p className="text-gray-600">{member.roleja}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Members;
