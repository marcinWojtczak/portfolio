'use client'
import Link  from 'next/link';
import React,{ useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, } from 'framer-motion';

const Main: React.FC = () => {

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
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.2, delay: 0.2, bounce: 0.2, type: 'spring' }}
      className='max-w-[850px] xl:max-w-[950px] h-[85vh] w-full text-center '>
      <div className='flex flex-col justify-center text-start gap-4 h-full'>
        <h6>Cześć, mam na imię</h6>
        <h1>Marcin Wojtczak.</h1>
        <h2>Jestem początkującym developerem.</h2>
        <p>Ponad 2 lata temu postanowiłem zmienić ścieżkę kariery i skupić się na nauce programowania. Od momentu podjęcia decyzji o zmianie kariery poświęciłem mnóstwo czasu na naukę i doskonalenie umiejętności programistycznych.
        </p>
        <div className='w-fit px-8 py-2 border-2 border-[#17899b] rounded-sm shadow-xl hover:bg-[#17899b]'>
          <Link href='#projects'><h6>Moje Projekty</h6></Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Main