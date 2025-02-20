"use client" 
import React from 'react'
import Link from './Link'

const ContactMenuBar = () => {
  return (
    <div className='w-[350px] font-semibold font-monaSans flex flex-row justify-between'>
      <Link name='GITHUB'/>
      <Link name='LINKEDIN'/>
      <Link name='TWITTER'/>
      <Link name="INSTAGRAM"/>
    </div>
  )
}

export default ContactMenuBar