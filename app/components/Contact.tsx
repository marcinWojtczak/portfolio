"use client"
import React, { useState, FormEvent, ChangeEvent, useEffect, useRef  } from 'react';
import { sendContactForm } from '../../lib/api';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Footer from './Footer';
import { motion, useAnimation, useInView, } from 'framer-motion';

const Contact: React.FC  = () => {

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

  const [formData, setFormData] = useState<{
    name: string,
    email: string,
    subject: string,
    message: string
  }>({
    name: '',
    email: '',
    subject: '',
    message: ''
  }) 
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prevFormData => {
      return {
        ...formData,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    await sendContactForm(formData);
  }

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
        <form 
          
          onSubmit={onSubmit}
          method="POST"
          className='py-10 flex flex-col items-center basis-1/2'>
          <input 
            type='text' 
            name='name' 
            value={formData.name}
            onChange={handleChange}
            placeholder='Name' 
            autoComplete='on' 
            required 
            className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full mb-6 costume-placeholder text-[#D9E1ED]'
          />
          <input 
            type='email' 
            name='email'
            value={formData.email} 
            onChange={handleChange}
            placeholder='Email' 
            autoComplete='on' 
            required 
            className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full  mb-6 costume-placeholder text-[#D9E1ED]'
          />
          <input 
            type='text' 
            name='subject'
            value={formData.subject} 
            onChange={handleChange}
            placeholder='Subject' 
            autoComplete='on' 
            className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full  mb-6 costume-placeholder text-[#D9E1ED]'
          />
          <textarea
            rows={10}
            name='message' 
            value={formData.message}
            onChange={handleChange}
            placeholder='Message' 
            required 
            className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full  mb-6 costume-placeholder text-[#D9E1ED] '
          ></textarea>
          <div className='flex justify-start w-full '>
            <button 
              type='submit'
              className='font-mono w-full px-8 py-2 border-2 border-[#17899b] hover:bg-[#17899b] rounded-sm shadow-xl text-[#00DDFF]'>Wyślij</button>
          </div>
        </form>
      </div>
      <Footer />
    </motion.div>
  )
}

export default Contact