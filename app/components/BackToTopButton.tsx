'use client'
import React, { useState, useEffect } from 'react';
import { BsArrowUpSquare, BsArrowUpSquareFill } from 'react-icons/bs';
import Link from "next/link";


const BackToTopButton = () => {

  const [backToTop, setBackToTop] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      if(window.scrollY > 400) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {backToTop && (
        <Link href='/'>
          <BsArrowUpSquare 
            className='fixed bottom-[50px] right-20'
            style={{ fontSize: '50px', background: '#fff', borderWidth: '2px', borderColor: '#17899b', borderRadius: '4px',  color: '#212F45'}}/>
        </Link>
      )}
    </>
  )
}

export default BackToTopButton