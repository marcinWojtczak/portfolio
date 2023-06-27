'use client'
import Link from "next/link";
import Menu from './Menu'
import { useState } from "react";
import { HiMenu } from "react-icons/hi"
import { RiCloseFill } from "react-icons/ri"



const Navbar: React.FC = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="flex justify-between items-center h-[80px] px-6 sm:px-20 w-full">
      <div>
        <Link href='/'><h4 className='font-[400] text-[#D9E1ED]'>MW</h4></Link>
      </div>
      <div className="max-md:hidden">
        <Menu />
      </div>
      <div className="md:hidden">
        <HiMenu 
          style={{ color: 'white', fontSize: '25px'}}
          onClick={() => setToggleMenu(toggleMenu => !toggleMenu)}/>
        {toggleMenu ? (
          <div className='fixed top-0 right-0 bg-[#233a5e] h-full w-[70%] sm:w-[40%] ease-in duration-500 z-50 shadow-[3px_3px_10px_5px_#1a202c]'>
            <div className='py-6 px-4'>
              <RiCloseFill  
                style={{ color: 'white', fontSize: '25px'}}
                onClick={() => setToggleMenu(toggleMenu => !toggleMenu)}
              />
            </div>
            <Menu />
          </div>
      ) :
        <div className='fixed top-0 right-[-1000px] bg-[#233a5e] h-full w-[40%] ease-in duration-500 z-50 shadow-[3px_3px_10px_5px_#1a202c]'>
          <div className='py-6 px-4'>
            <RiCloseFill 
              size={'25px'}
              style={{ color: 'white'}} 
              onClick={() => setToggleMenu(toggleMenu => !toggleMenu)}
            />
          </div>
          <Menu />
        </div>
      }
    </div>
    </header>
  )
}

export default Navbar