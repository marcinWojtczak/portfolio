import React from 'react';
import About from './components/About';
import Main from './components/Main';



const HomePage = () => {
  return (
      <div className='flex flex-col items-center justify-center'>
        <Main />
        <About />
      </div>
  )
}

export default HomePage
