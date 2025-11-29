import React from 'react'

function Cover({coverImg, title}) {
    const coverImgStyle = {
        backgroundImage: `url(${coverImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
     
        width: '100%',
        
    };
    console.log(coverImg)
  return (
    <>
    <div className='absolute z-0 bg-white bg-opacity-60 inset-0'></div>
    <div className="h-full" style={coverImgStyle}>
        <div className='h-full flex justify-center items-center'>
            <h1 className='z-10 justify-center text-center text-black text-5xl font-bold font-outline'>
                {title}
            </h1>
        </div>
    </div>
    </>
  )
}

export default Cover