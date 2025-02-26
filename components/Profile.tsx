"use client"
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className='h-[500px] relative'>
        <h2 className='font-bold font-monaSans text-center w-full h-[500px] md:text-[210px] text-[80px] leading-none relative flex flex-col items-center overflow-hidden'>
            <span className='md:relative absolute md:top-0 top-[105px]'>AZIM</span>
            <span className='absolute top-[175px]'>SAIBOU</span>
        </h2> 

        <div className='rounded-[20px] w-[200px] h-[200px] overflow-hidden absolute left-[50%] translate-x-[-50%] bottom-[16px]'>
            <Image src="/assets/images/profile.png" alt="" height={200} width={200} />
        </div>
    </div>
  )
}

export default Profile