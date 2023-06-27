'use client'
import Link from "next/link";
import Menu from './Menu'
import { useState } from "react";
import { HiMenu } from "react-icons/hi"
import { RiCloseFill } from "react-icons/ri"
import { motion } from "framer-motion"


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
        <HiMenu onClick={() => setToggleMenu(toggleMenu => !toggleMenu)}/>
        {toggleMenu ? (
          <div className='fixed top-0 right-0 bg-[red] h-full w-[50%] sm:w-[40%] ease-in duration-500'>
            <div className='p-2'>
              <RiCloseFill 
                size={'25px'} 
                onClick={() => setToggleMenu(toggleMenu => !toggleMenu)}
              />
            </div>
            <Menu />
          </div>
      ) :
        <div className='fixed top-0 right-[-1000px] bg-[red] h-full w-[40%] ease-in duration-500 '>
          <div className='p-2'>
            <RiCloseFill 
              size={'25px'} 
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