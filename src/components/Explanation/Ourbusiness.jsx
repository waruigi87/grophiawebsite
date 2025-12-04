import React from 'react'

function Ourbusiness() {

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 1 }
    };

    const  businessInformationdata = [
        {
            id: 1,
            title: "教育事業",
            imgUrl: "/Business/KinderkidsBusiness.png",
            link:"",
            description: "未来の農業体験を通して子どもの教育サービスを提供しています。"
        },
        {
            id: 2,
            title: "野菜販売事業",
            imgUrl: "/Business/ClassicoFoodImage.png",
            link:"",
            description: "育てた野菜を給食会社、飲食店への販売サービスを提供しています。"
        },
        {
            id: 3,
            title: "キット販売事業",
            imgUrl: "/Business/TowerTennoji.jpg",
            link:"",
            description: "誰でもどこでも野菜を育てられるように、キット販売から設置まで承ります。"
        }
    ];      


  return (
    <>
        <div className='bg-[#2e6417] pb-12'>
            <div className='container mx-auto px-4'>
                <div className='items-center text-center py-12 text-white'>
                    <h1 className='text-4xl'>事業内容</h1>
                    <p>わたしたちの取り組み</p>
                </div>
                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                
                viewport={{ once: true, amount: 0.2 }}
                className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-6 '>
                    {businessInformationdata.map((item) => (
                        <motion.div
                        variants={itemVariants}
                        whileHover={{scale:1.05, y:-10}}
                         key={item.id} className="p-6 border-gray-200 rounded-lg hover:shadow-xl bg-[#f9f7f0] transition-shadow duration-300 flex justify-between">
                           {
                            item.id % 2 === 0 ? (
                                <>
                                    <div className='text-black mr-6 flex-1 space-y-4'>
                                        <h2 className='text-2xl font-semibold mb-4'>{item.title}</h2>
                                        <p className='text-black'>{item.description}</p>
                                        <button onClick={()=>{}} className='border border-green-900 rounded-md px-3 py-2 text-xs hover:bg-green-900 hover:text-white hover:scale-110 transition duration-300 ease-in-out  '>詳細はこちらへ</button>
                                    </div>
                                    <div className='w-40 h-40 '>
                                        <img className='w-[400px] h-full object-cover rounded-full' src={item.imgUrl} alt="" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='w-40 h-40'>
                                        <img className='w-full h-full  rounded-full' src={item.imgUrl} alt="" />
                                    </div>
                                    <div className='text-black ml-6 flex-1 space-y-4'>
                                        <h2 className='text-2xl font-semibold mb-4'>{item.title}</h2>
                                        <p className='text-black'>{item.description}</p>
                                         <button onClick={()=>{}} className='border border-green-900 rounded-md px-3 py-2 text-xs hover:bg-green-900 hover:text-white hover:scale-110 transition duration-300 ease-in-out  '>詳細はこちらへ</button>
                                    </div>
                                </>
                            )
                           }
                            
                            
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Ourbusiness