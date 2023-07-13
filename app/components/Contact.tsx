r"use client"
import React, { useEffect, useRef  } from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Footer from './Footer';
import { motion, useAnimation, useInView, } from 'framer-motion';
import Form from './Form' 

const Contact: React.FC  = () => {

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
      className='max-w-[850px] xl:max-w-[950px] mt-20 lg:my-0 w-full flex flex-col justify-center gap-6 scroll-mt-6' id='contact'>
      <div className='flex items-center gap-2'>
        <h5 className='font-mono tracking-wider text-[#00DDFF]'>03.</h5>
        <h2>Kontakt</h2>
        <hr className='border-[#17899b] grow'></hr>
      </div>
      <div className='md:flex md:gap-6 '>
        <div className='my-10 p-4 flex flex-col items-start justify-center gap-8 basis-1/2 bg-[#233a5e] shadow-[-3px_-3px_10px_5px_#1a202c]'>
          <div className=''>
            <h5>Witaj!</h5>
            <p>Dziękuję za odwiedzenie mojego portfolio. Skontaktuj się ze mną za pomocą formularza lub zadzwoń pod podany numer telefonu.</p>
          </div>
          <div className='flex gap-6'>
            <FaPhone style={{color: '#00DDFF'}} />
            <p>531 787 144</p>
          </div>
          <div className='flex gap-6'>
            <MdEmail style={{color: '#00DDFF'}} />
            <p>marcinwojtczak.pure@gmail.com</p>
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </motion.div>
  )
}

export default Contact