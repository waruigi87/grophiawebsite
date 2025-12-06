import React from 'react';

function StoreHero() {
    return (
        <>
            <div className="surface-secondary flex justify-center items-center  min-h-[150px] md:min-h-[100px]">
                <div className="container py-12 px-6 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="items-center">
                            <h2 className="text-3xl font-bold mb-4">ストアへようこそ</h2>
                        </div>
                        <div className="">
                            <img className="w-full h-full" src="/Process/Seeds.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoreHero;
