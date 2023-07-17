"use client"
import React,{ useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, } from 'framer-motion';
import myImg from '../../public/myImg.png'



const About: React.FC = () => {
  
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const animation = useAnimation();

  useEffect(() => {
    console.log(isInView)
    if(isInView){
      animation.start("visible");
    }
  },[isInView])
  

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={{
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0},
      }}
      transition={{ duration: 0.2, delay: 0.2, bounce: 0.2, type: 'spring' }}
      className='max-w-[850px] xl:max-w-[950px] my-20 lg:my-0 w-full flex flex-col gap-4 justify-center scroll-mt-6' id='about'>
      <div className='flex items-center gap-2'>
        <h5 className='font-mono tracking-wider text-[#00DDFF]'>01.</h5>
        <h2>O mnie</h2>
        <hr className='border-[#17899b] grow'></hr>
      </div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='order-2 sm:basis-2/3 sm:order-1 flex flex-col gap-4'>
          <p>Obecnie pracuję jako trenere personalny, ale od ponad 2 lat każdą wolną chwile poświęcam na nauce programowania. Głównie skupiam się na Pythonie i JavaScriptcie. 
          </p>
          <p>Moje doświadczenie jako trener personalny nauczyło mnie, jak być cierpliwym, konsekwentnym i skupionym na celu. Teraz te umiejętności przenoszę do świata programowania.
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
              <ul className='w-full list-inside grid grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-2'>
                <li className='cursor-default'>Nba</li>
                <li className='cursor-default'>Historia II Wojny Światowej</li>
                <li className='cursor-default'>Sport</li>
                <li className='cursor-default'>Podróże</li>
                <li className='cursor-default'>Gotowanie</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='order-1 sm:basis-1/3'>
          <div onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)} 
                className='rounded-md bg-[#187381]'
          >
            {isHover ? (
              <Image 
                src={myImg} 
                alt='marcin img'
                width={464}
                height={597}
                style={{objectFit: "cover", borderRadius: '6px', width: '100%'}}
              />
              ) : (
              <Image 
                src={myImg} 
                alt='marcin img'
                width={464}
                height={597}
                style={{objectFit: "cover", mixBlendMode: 'overlay', borderRadius: '6px', width: '100%'}}
              />
              )
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About