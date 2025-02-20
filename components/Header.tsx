"use client"
import React from 'react'
import ContactMenuBar from './ContactMenuBar'

const Header = () => {
  return (
    <div className="flex flex-row justify-between py-[20px] px-[30px]">
      <p>Logo</p>
      <ContactMenuBar/>
    </div>
  )
}

export default Header