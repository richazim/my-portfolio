"use client"
import React from 'react'
import ContactMenuBar from '../ContactMenuBar'
import CustomLink from "@/components/CustomLink";

const Header = () => {
  return (
    <div className="flex flex-row sm:justify-between justify-center py-[20px] px-[30px]">
      <CustomLink name="BOOK ME HERE" url="https://freelancer.com" className="font-bold border-[3px] py-[7px] px-[10px] hidden sm:block"/>
      <ContactMenuBar/>
    </div>
  )
}

export default Header