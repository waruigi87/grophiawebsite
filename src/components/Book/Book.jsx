import React from 'react';
import MyBook from './MyBook.jsx';

function Book() {
    const bgStyle = {
        backgroundImage: 'url("/Book/wood-2045379_1280.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <div style={bgStyle} className="w-full h-full flex items-center justify-center">
                <div>
                    <MyBook />
                </div>
            </div>
        </>
    );
}

export default Book;
