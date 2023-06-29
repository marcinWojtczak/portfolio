'use Client';
import React, { useState, FormEvent, ChangeEvent  } from 'react';
import AWS from 'aws-sdk'

const Form = () => {

  const [isSubmit, setIsSubmit] = useState(false);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmit(true)

    // AWS.config.update({
    //   accessKeyId: praws_access_key_id,
    //   secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
    //   region: 'eu-central-1',
    // });

    const ses = new AWS.SES({  region: 'eu-central-1'  });

    const params = {
    Destination: {
      ToAddresses: ['marcinwojtczak.pure@gmail.com'], 
    },
    Message: {
      Body: {
        Text: { Data: formData.message },
      },
        Subject: { Data: formData.subject },
      },
    Source: 'marcinwojtczak.pure@gmail.com', 
  };

  try {
      await ses.sendEmail(params).promise();
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <>
      { !isSubmit ? (
        <form
          onSubmit={handleSubmit}
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
        <div className='flex items-center justify-center text-center'>
          <h6>Dziekuję za skorzystanie z formularza. Twoja wiadomość została wyslana.</h6>
        </div>
      )}
    </>
  )
}

export default Form