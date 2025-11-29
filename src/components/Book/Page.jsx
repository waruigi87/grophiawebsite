import React from 'react'

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="relative demoPage h-[500px] bg-white " ref={ref}>
            
            <div className='z-10 h-full'>{props.children}</div>
       
        </div>
    );
});

export default Page;