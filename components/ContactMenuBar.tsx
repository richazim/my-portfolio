"use client" 
import React from 'react'
import Link from 'next/link';

const ContactMenuBar = () => {
  return (
    <div className='w-[350px] font-semibold font-monaSans flex flex-row justify-between text-[#e4ded7]'>
      <Link href="https://github.com/richazim" className="p-[10px]" target="_blank">
        <div>GITHUB</div>
      </Link>
      <Link href="https://linkedin.com/in/azimsaibou" className="p-[10px]" target="_blank">
        <div>LINKEDIN</div>
      </Link>
      <Link href="https://x.com/AzimSaibou" className="p-[10px]" target="_blank">
        <div>TWITTER</div>
      </Link>
      <Link href="https://www.tiktok.com/@azim.ma.7?_t=ZM-8uENHNBs1Xa&_r=1" className="p-[10px]" target="_blank">
        <div>TIKTOK</div>
      </Link>
    </div>
  )
}

export default ContactMenuBar