import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='lg:h-screen px-0 md:px-8 py-12 sm:py-20 w-[85%] sm:w-[75%] md:w-[68%] lg:w-[45%] flex flex-col justify-center items-start gap-4'>
      <div className='flex gap-2 items-center'>
        <h6>01.</h6>
        <h5>O mnie</h5>
      </div>
      <div className='flex gap-8'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus dicta veritatis dolore cumque, excepturi voluptate. Numquam, dolore eius voluptatem necessitatibus dicta omnis saepe porro quia consectetur possimus sapiente assumenda eaque iusto dolorem. Optio enim ipsam placeat eius itaque expedita harum. Ducimus natus voluptate eaque repudiandae tempora esse, quaerat adipisci, sint doloremque iste vero facere laborum officiis atque dolores non?
        </p>
        <div className='relative flex justify-center items-center'>
          <div className='border-2 border-[#17899b] rounded-sm shadow-xl w-[150px] h-[215px] absolute left-2 top-6 z-100'>
          </div>
          <div className='z-10 bg-[#00DDFF]'>
            <Image 
              src='/marcin.png' 
              width={1500}
              height={2250}
              alt='marcin img'
              className='object-center opacity-70 hover:opacity-100'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p>Technologie kótrych używam</p>
        <div className='flex gap-12 leading-loose marker:text-[#00DDFF]'>
          <ul className='list-inside'>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
          <ul>
            <li>Django</li>
            <li>React</li>
            <li>Next</li>
          </ul>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>PostgreSql</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About