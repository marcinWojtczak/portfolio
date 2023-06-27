"use client"
import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import Link from 'next/link'

interface OthersProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const OthersProject: React.FC<OthersProjectProps> = ({
  title, 
  description, 
  tech, 
  link
}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className='bg-[#233a5e] basis-[32%] p-4 flex flex-col gap-6 hover:relative hover:top-[-10px] shadow-[-3px_-3px_10px_5px_#1a202c]'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='flex justify-between items-center'>
        <FiFolder style={{ fontSize: '26px', color: '#00DDFF'}}/>
        <div className='flex items-center gap-2'>
        <Link href='' target='_blank'>
          <FiGithub style={{ color: '#D9E1ED'}}/>
        </Link>
        <Link href=''>
          <FiExternalLink style={{color: '#D9E1ED'}} />
        </Link>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        {!isHover 
          ? <h5 className='font-semibold'>{title}</h5>
          : <h5 className='font-semibold text-[#00DDFF]'>{title}</h5>
        }
        <p>{description}</p>
      </div>
      <h6 >{tech.join(', ')}</h6>
    </div>
  
  )
}

export default OthersProject