"use client"
import React,{ useState } from 'react';
import Image from 'next/image';



const About = () => {
  const [isHover, setIsHover] = useState(false)
  

  return (
    <div className='max-w-[850px] my-20 lg:my-0 lg:h-screen w-full flex flex-col gap-4 justify-center'>
      <div className='flex items-center'>
        <h5>01.</h5>
        <h4>O mnie</h4>
      </div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='order-2 sm:basis-2/3 sm:order-1 flex flex-col gap-4'>
          <p>
          I'm a former personal trainer, beginner developer. I have decided to change my
          career path and I have been committed to that idea totally since the last 2 years.
          Now, after finishing several courses and completing a few independent projects I
          am ready to undertake an entry-level job.
          </p>
          <div className='flex flex-col col-span-3 gap-1'>
            <p className='text-[#D9E1ED]'>Technologie kótrych używam</p>
            <div className='flex flex-wrap gap-4'>
              <ul className='w-full list-inside grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2'>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Django</li>
                <li>React</li>
                <li>Next</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>PostgreSql</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col col-span-3 gap-1'>
            <p className='text-[#D9E1ED]'>Zainteresowania</p>
            <div className='flex flex-wrap gap-4'>
              <ul className='w-full list-inside grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2'>
                <li>Nba</li>
                <li>II WW</li>
                <li>Military</li>
                <li>Travel</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='order-1 sm:basis-1/3'>
          <div onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)} 
                className='rounded-md'
          >
            {isHover ? (
              <Image 
                src='/marcin1.png' 
                alt='marcin img'
                width={464}
                height={597}
                style={{objectFit: "cover", borderRadius: '6px'}}
              />
              ) : (
              <Image 
                src='/marcin1.png' 
                alt='marcin img'
                width={464}
                height={597}
                style={{objectFit: "cover", mixBlendMode: 'overlay', borderRadius: '6px'}}
              />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About