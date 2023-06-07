import React from 'react';
import Link from "next/link";
import { FaReact, FaPython, FaFileDownload } from 'react-icons/fa'
import { SiJavascript, SiDjango, SiNextdotjs, SiTypescript, SiCss3, SiHtml5, SiTailwindcss, SiPostgresql } from 'react-icons/si'

const HomePage = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='p-20 lg:basis-1/2'>
        <div className='text-left flex flex-col gap-6'>
          <h1 className='font-semibold '>Cześć, mam na imię Marcin</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, optio! Delectus consequatur quas commodi repudiandae facere accusantium cum similique et deleniti voluptatibus facilis veniam, odit minima, ipsam corporis ipsum optio aperiam tenetur culpa blanditiis in? Odit repellat atque quidem non?
          </p>
          <div className='flex gap-4 items-center'>
            <div className='flex items-center justify-center px-8 py-2 bg-orange-500 rounded-md gap-2'>
              <button>Moje CV</button>
              <FaFileDownload size={'20px'}/>
            </div>
            <Link href='project'><p>Moje Projekty</p></Link>
          </div>
        </div>
      </div>

      <div className='lg:basis-1/2 bg-zinc-300'>
        <div>
          <FaReact  size={'35px'}/>
          <FaPython size={'35px'} />
          <SiDjango size={'35px'} />
          <SiJavascript size={'35px'} />
          <SiNextdotjs size={'35px'} />
          <SiTypescript size={'35px'} />
          <SiCss3 size={'35px'} />
          <SiHtml5 size={'35px'} />
          <SiTailwindcss size={'35px'}/>
          <SiPostgresql size={'35px'}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
