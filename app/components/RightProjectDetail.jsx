"use client"
import React, { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image';
import Link from 'next/link'

const RightProjectDetail = ({title, backgroundImg, subtitle, description, tech, link}) => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div className='flex flex-col gap-4 xl:flex-row'>
      <div className='basis-[60%] flex flex-col relative gap-6 rounded-md w-full'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {!isHover ? (
          <div className='w-full h-full flex flex-col gap-4 bg-[#205b64] p-4 xl:p-10 shadow-[3px_3px_10px_5px_#1a202c]'>
            <div className='basis-1/4 flex flex-col xl:items-center mix-blend-overlay'>
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
            <Image
              src={backgroundImg}
              alt='Travel img'
              width={1920}
              height={671}
              style={{objectFit: "cover", borderBottomRightRadius: '6px', borderBottomLeftRadius: '6px', height: '250px', flexBasis: '3/4', mixBlendMode: 'multiply'}}
            />
          </div>
        ) : (
          <div className='w-full h-full flex flex-col gap-4 p-4 xl:p-10 shadow-[3px_3px_10px_5px_#1a202c]'>
            <div className='basis-1/4 flex flex-col xl:items-center'>
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
            <Image
              src={backgroundImg}
              alt='Travel img'
              width={1920}
              height={671}
              style={{objectFit: "cover", borderBottomRightRadius: '6px', borderBottomLeftRadius: '6px', height: '250px', flexBasis: '3/4'}}
            />
          </div>
        )
        }
      </div>
      <div className='basis-[40%] flex flex-col text-right relative gap-4'>
        <h4 className='basis-1/3 flex justify-end items-end'>{title}</h4>
        <div className='basis-2/3 xl:absolute xl:w-[400px] right-0 top-[40%] flex flex-col gap-4 items-end'>
          <p className='bg-[#233a5e] p-4 shadow-[3px_3px_10px_5px_#1a202c]'>{description}</p>
          <h6>{tech.join(', ')}</h6>
          <div className="flex gap-2">
            <Link href={link} target='_blank'>
              <FiGithub style={{ textAlign: 'right', color: '#D9E1ED'}}/>
            </Link>
            <Link href=''>
              <FiExternalLink style={{ textAlign: 'right', color: '#D9E1ED'}} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightProjectDetail

