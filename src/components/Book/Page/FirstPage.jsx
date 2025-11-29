import React from 'react'
import ProfilePic from '/DSC08433.jpg';

function FirstPage() {
  return (
    <>
    <div className='h-full'>
        <main className='h-full w-full bg-[#f9f7f0] page-shadow'>
            <div className="container">
                <div>
                    <div className='mx-4 pt-4'>
                        <img src={ProfilePic} alt=""  className='w-24 h-24 object-cover mx-auto rounded-full'/>
                    </div>
                    <div className='mx-4 mt-4'>
                      <p>Our Story</p>
                      <h1 className='text-xs md:text-xl font-bold'>人が育つ場に、共に育つ緑を</h1>
                      <p className='text-sm'>
                      私たちの旅は、持続可能な農業への情熱から始まりました。伝統的な農法の限界を目の当たりにし、革新的な解決策を模索する中で、水耕栽培の可能性に魅了されました。この技術は、土地や気候に依存せずに新鮮で栄養価の高い作物を育てることができ、未来の食糧問題に対する答えとなると確信しました。

                      
                      </p>
                        
                    </div>
                </div>
            </div>

        </main>

    </div>
    </>
  )
}

export default FirstPage