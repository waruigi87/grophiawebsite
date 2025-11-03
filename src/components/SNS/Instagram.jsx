import React from 'react'

function  Instagram() {

    const instagramPosts = [
        {
            id: 1,
            imgUrl: "https://www.instagram.com/p/DQObI0aEYCx/embed",
            caption: "キャプション1"
        },
        {
            id: 2,
            imgUrl: "https://www.instagram.com/p/DQge1BHEa9U/embed",
            caption: "キャプション2"
        },{
            id: 3,
            imgUrl: "https://www.instagram.com/p/DQgdow9CdzL/embed",
            caption: "キャプション3"
        }
        // 他の投稿データ
    ];

  return (
    <>
        <div className='bg-[#f9f7f0] py-12'>
            <div className='container mx-auto px-4'>
                <div className='items-center text-center pb-12'>
                    <h1 className='text-4xl'>Instagram</h1>
                    <p>最新情報はこちらから</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                    instagramPosts.map((post) => (
                        <div key={post.id} className='flex justify-center mb-8'>
                            <iframe 
                                src={post.imgUrl}
                                width="400"
                                
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency={true}
                                className='rounded-lg shadow-lg min-h-[500px]'
                            ></iframe>
                        </div>
                    ))
                    }

                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default  Instagram

