"use client" 
import React from 'react'
import CustomLink from "./CustomLink";

const ContactMenuBar = () => {
  return (
    <div className='w-[350px] font-semibold font-monaSans flex flex-row justify-between'>
      <CustomLink name='GITHUB' url="https://github.com/richazim" target="_blank"/>
      <CustomLink name='LINKEDIN' url="https://linkedin.com/in/azimsaibou" target="_blank"/>
      <CustomLink name='TWITTER' url="https://x.com/AzimSaibou" target="_blank"/>
      <CustomLink name="TIKTOK" url="https://www.tiktok.com/@azim.ma.7?_t=ZM-8uENHNBs1Xa&_r=1" target="_blank"/>
    </div>
  )
}

export default ContactMenuBar