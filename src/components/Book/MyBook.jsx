import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Page from './Page.jsx';
import Cover from './Cover/Cover.jsx';
import CoverImg from '/Book/botanical-garden-2045530_1280.jpg';
import FirstPage from './Page/FirstPage.jsx';
import SecondPage from './Page/SecondPage.jsx';

function MyBook(props) {


  return (
    <HTMLFlipBook 
    
    
    usePortrait={false}

    width={500} height={500}
    minWidth={280} maxHeight={700}
    maxWidth={900} minHeight={350}
   
     showCover={true}
     
     
     >
        <Page number={1}>
            <Cover coverImg={CoverImg} title="Story of GROPHIA" />
        </Page>
        <Page number={2}>
            <FirstPage />
      
        </Page>
        <Page number={3}>
            <SecondPage />
        </Page>
        <Page number={4}>
            <div className="demoPage">Page 1</div>
        </Page>

    </HTMLFlipBook>
  )
}

export default MyBook