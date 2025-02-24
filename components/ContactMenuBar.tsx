"use client" 
import React from 'react'
import CustomLink from "./CustomLink";

const ContactMenuBar = () => {
  return (
    <div className='w-[350px] font-semibold font-monaSans flex flex-row justify-between'>
      <CustomLink name='GITHUB' url="https://github.com/richazim"/>
      <CustomLink name='LINKEDIN' url="https://linkedin.com/in/azimsaibou"/>
      <CustomLink name='TWITTER' url="https://twitter.com/"/>
      <CustomLink name="TIKTOK" url="https://twitter.com/tiktok"/>
    </div>
  )
}

export default ContactMenuBar