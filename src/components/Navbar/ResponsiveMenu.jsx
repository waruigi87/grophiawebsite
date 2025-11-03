import React from 'react'
import { NavNames } from '../../dummyData/NavNames.js'
import { AnimatePresence, motion } from 'framer-motion'

function ResponsiveMenu({open}) {
  return (
    <>
    <AnimatePresence>
    {open && (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y:0 , opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden absolute left-0 w-full h-screenoverflow-hidden z-50 "
      >
        <div className='text-xl font-semibold uppercase  bg-green-700 text-white  m-6  rounded-3xl '>
            <ul className='flex flex-col justify-center items-center gap-6 py-4'>
            {
                NavNames.map((item) => (
                <li key={item.id}>
                    <a href={item.link} className="inline-block text-white text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-gray-300 transition-all duration-300 font-semibold">{item.title}</a>
                </li>
                ))
            }
            </ul>

        </div>
        
      </motion.div>
    )}
    </AnimatePresence>
    </>
    
  )
}

export default ResponsiveMenu