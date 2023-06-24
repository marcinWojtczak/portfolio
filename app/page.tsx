import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import MyProject from './components/MyProject';

const HomePage = () => {
  return (
      <div className='w-full flex flex-col items-center justify-center px-6 gap-[300px]'>
        <Main />
        <div className='flex flex-col gap-[200px]'>
          <About />
          <MyProject />
          <Contact />
        </div>
      </div>
  )
}

export default HomePage
