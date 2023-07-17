'use client'
import React, { useState, useEffect } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';
import Link from "next/link";


const BackToTopButton = () => {

  const [backToTop, setBackToTop] = useState(false)
  console.log('button:', backToTop)

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
      <Link href='/'>
        { backToTop &&
          <BsArrowUpSquare 
            className='hidden xl:inline fixed bottom-[50px] right-10 opacity-10 hover:opacity-100'
            style={{ fontSize: '40px', color: '#00DDFF' }}
          />
        }
      </Link>
    </>
  )
}

export default BackToTopButton