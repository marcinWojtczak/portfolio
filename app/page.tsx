import React from 'react';
import About from './components/About';
import Main from './components/Main';
import MyProject from './components/MyProject';



const HomePage = () => {
  return (
      <div className='w-full flex flex-col items-center justify-center px-6 sm:px-20'>
        <Main />
        <About />
        <MyProject />
      </div>
  )
}

export default HomePage
