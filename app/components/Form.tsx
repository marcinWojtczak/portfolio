'use Client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { sendContactForm } from '../lib/api';



const Form = () => {

  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState<{
    name: string,
    email: string,
    subject: string,
    message: string,
    
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

  const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
    setFormData(prevFormData => {
      return {
        ...formData, 
      }
    });
    
    try {
      await sendContactForm(formData);
      setIsSubmit(true)
      setMessage('Dziękuję za wypełnienie formularza kontaktowego. Twój mail został wysłany')
    } catch (error) {
      error:error.message
    }
  }

  return (
    <>
      { !isSubmit ? (
      <form
        onSubmit={onSubmit}
        action='https://formspree.io/f/meqbjwyz'
        method="POST"
        className='py-10 flex flex-col items-center basis-1/2'
      >
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
      ) : (
        <div className='flex items-center justify-center text-center border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] my-10 p-4 min-h-[200px]'>
          <h5 className='text-[#ececec]'>{message}</h5>
        </div>
      )}
    </>
  )
}

export default Form