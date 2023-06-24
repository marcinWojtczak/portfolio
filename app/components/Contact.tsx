"use client"
import React, { useState, FormEvent } from 'react'
import { sendContactForm } from '../../lib/api'
import Footer from './Footer'

const Contact = () => {

  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  )


  const handleChange = (e) => {
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
    <div className='max-w-[850px] mt-20 lg:my-0 w-full flex flex-col justify-center gap-6'>
      <div className='flex items-center gap-2'>
        <h5 className='font-mono tracking-wider text-[#00DDFF]'>03.</h5>
        <h2>Kontakt</h2>
        <hr className='border-[#17899b] grow'></hr>
      </div>
      <form 
        onSubmit={onSubmit}
        method="POST"
        className='w-full py-10 flex flex-col items-center '>
        <input 
          type='text' 
          name='name' 
          value={formData.name}
          onChange={handleChange}
          placeholder='Name' 
          autoComplete='on' 
          required 
          className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full sm:w-[60%] mb-6 costume-placeholder text-[#D9E1ED]'
        />
        <input 
          type='email' 
          name='email'
          value={formData.email} 
          onChange={handleChange}
          placeholder='Email' 
          autoComplete='on' 
          required 
          className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full sm:w-[60%] mb-6 costume-placeholder text-[#D9E1ED]'
        />
        <input 
          type='text' 
          name='subject'
          value={formData.subject} 
          onChange={handleChange}
          placeholder='Subject' 
          autoComplete='on' 
          className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full sm:w-[60%] mb-6 costume-placeholder text-[#D9E1ED]'
        />
        <textarea
          rows={10}
          name='message' 
          value={formData.message}
          onChange={handleChange}
          placeholder='Message' 
          required 
          className='border border-[#233a5e] rounded-sm outline-0 bg-[#212F45] py-1 pl-2 w-full sm:w-[60%] mb-6 costume-placeholder text-[#D9E1ED] '
        ></textarea>
        <div className='flex justify-start w-full sm:w-[60%]'>
          <button 
            type='submit'
            className='font-mono  items-start px-8 py-2 border-2 border-[#17899b] hover:bg-[#17899b] rounded-sm shadow-xl text-[#00DDFF]'>Wyślij</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Contact