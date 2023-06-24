"use client"
import React,{ useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView, } from 'react-intersection-observer'



const About = () => {
  
  const [isHover, setIsHover] = useState(false)
  const {ref, inView} = useInView()
  const animation = useAnimation();

  useEffect(() => {
    console.log(inView)
    if(inView){
      animation.start({
        x: 0,
        transition: {
          duration: 0.5, bounce: 0.3, type: 'spring' 
        }
      })
    }
    console.log(inView)
    if(!inView){
      animation.start({x: '-100vw'})
    }
  },[inView])
  

  return (
      <motion.div 
        // variants={{
        //   hidden: { opacity: 0, y: 100},
        //   visible: { opacity: 1, y: 0},
        // }}
        // initial="hidden"
        // animate={animation}
        // transition={{ duration: 0.5, bounce: 0.3, type: 'spring' }}
        // animate={animation}
        // ref={ref}
        className='max-w-[850px] my-20 lg:my-0 w-full flex flex-col gap-4 justify-center'>
        <div className='flex items-center gap-2'>
          <h5 className='font-mono tracking-wider text-[#00DDFF]'>01.</h5>
          <h2>O mnie</h2>
          <hr className='border-[#17899b] grow'></hr>
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
                <ul className='w-full list-inside grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2 cursor-default'>
                  <li className='cursor-default'>JavaScript</li>
                  <li className='cursor-default'>TypeScript</li>
                  <li className='cursor-default'>Python</li>
                  <li className='cursor-default'>Django</li>
                  <li className='cursor-default'>React</li>
                  <li className='cursor-default'>Next</li>
                  <li className='cursor-default'>HTML</li>
                  <li className='cursor-default'>CSS</li>
                  <li className='cursor-default'>Tailwind</li>
                  <li className='cursor-default'>PostgreSql</li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col col-span-3 gap-1'>
              <p className='text-[#D9E1ED]'>Zainteresowania</p>
              <div className='flex flex-wrap gap-4'>
                <ul className='w-full list-inside grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2'>
                  <li className='cursor-default'>Nba</li>
                  <li className='cursor-default'>II WW</li>
                  <li className='cursor-default'>Military</li>
                  <li className='cursor-default'>Travel</li>
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
      </motion.div>
    // </motion.div>
  )
}

export default About