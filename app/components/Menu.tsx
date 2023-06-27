import Link from "next/link";
import React from "react";
import { FaFileDownload } from 'react-icons/fa'

const Menu: React.FC = () => {

  return (
    <nav className='h-full w-full flex md:flex-row flex-col items-center justify-center gap-6'>
      <div className='flex items-center gap-2'>
        <h6>01.</h6>
        <Link href='#about'><p className='hover:text-[#D9E1ED]'>O mnie</p></Link>
      </div>
      <div className='flex items-center'>
        <h6>02.</h6>
        <Link href='#projects'><p className='hover:text-[#D9E1ED]'>Moje Projekty</p></Link>
      </div>
      <div className='flex items-center'>
        <h6>03.</h6>
        <Link href='#contact'><p className='hover:text-[#D9E1ED]'>Kontakt</p></Link>
      </div>
      <div className='flex items-center justify-center px-8 py-2 border-2 border-[#17899b] hover:bg-[#17899b] gap-2 rounded-sm shadow-xl'>
        <button className='text-[#D9E1ED] font-mono'>
          <h6>Moje CV</h6>
        </button>
        <FaFileDownload size={'20px'} color={'D9E1ED'}/>
      </div>
    </nav>
  )
}

export default Menu