import React from 'react'
import { easeIn, motion } from 'framer-motion'
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';

const ExplanationData  = [{
    id: 1,
    title: "種を植える",
    imgUrl: "/Process/Seeds.png",
    description: "これは説明セクション1の説明です。"
},
{
    id: 2,
    title: "苗を育てる",
    imgUrl: "/Process/PlantingSeedlings.png",
    description: "これは説明セクション2の説明です。"    

},{
    id: 3,
    title: "タワーで育てる",
    imgUrl: "/Process/GrowingPlants.png",
    description: "これは説明セクション3の説明です。"    
},{
    id: 4,
    title: "収穫する",
    imgUrl: "/Process/GrowingPlants.png",
    description: "これは説明セクション4の説明です。"
}

]

function Explanation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: 'easeInOut',
 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { easeIn: 'easeOut', duration: 0.8 }
  };

  return (
    <>
     <div className='bg-[#f9f7f0]'>
        <div className='container mx-auto px-4'>
            <div className='items-center text-center py-12'>
                <h1 className='text-4xl'>水耕栽培のプロセス</h1>
                <p>土を使わない未来の農法</p>
            </div>
            <motion.div
            variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}

              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                {ExplanationData.map((item) => (
                    <motion.div 
                    variants={itemVariants}
                    whileHover={{scale:1.05, y:-10}}
                     key={item.id} className="p-6 border border-gray-200 m-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                        <h2 className='text-xl font-semibold mb-4 text-center'>{item.title}</h2>
                        <div className='w-full h-40 sm:h-48 md:h-56 lg:h-64 flex justify-center items-center mb-4 overflow-hidden'>
                            <img src={item.imgUrl} alt="No Image" className="w-full h-full object-contain" />
                        </div>
                        
                        <p className='text-gray-600'>{item.description}</p>
                    </motion.div>
                ))}

            </motion.div>

        </div>

     </div>
    
    </>
  )
}

export default Explanation