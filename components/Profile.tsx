"use client"
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className='h-[500px] relative'>
        <h2 className='font-bold font-monaSans text-center h-[500px] text-[210px] leading-none relative'>
            <span className='block text-center'>AZIM</span>
            <span className='block text-center absolute left-[50%] translate-x-[-50%] bottom-[117px]'>SAIBOU</span>
        </h2> 

        <div className='rounded-[20px] w-[200px] h-[200px] overflow-hidden absolute left-[50%] translate-x-[-50%] bottom-[16px]'>
            <Image src="/assets/images/profile.png" alt="" height={200} width={200} />
        </div>
    </div>
  )
}

export default Profile