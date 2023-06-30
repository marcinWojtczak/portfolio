import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import MyProject from './components/MyProject';


const HomePage = () => {
  return (
      <div className='w-full flex flex-col items-center justify-center px-6 gap-20'>
        <Main />
        <div className='f-full flex flex-col gap-10 lg:gap-40'>
          <About />
          <MyProject />
          <Contact />
        </div>
      </div>
  )
}

export default HomePage
