"use client"
import React from 'react'
import CustomLink from "@/components/CustomLink";
import Link from "next/link";
import Image from "next/image";

const NavigationMenuBar = () => {
  return (
    <div>
      <ul className="flex flex-row bg-black font-bold text-white">
          <Link href="/assets/images/cv-azim.png" className="p-[10px]" target="_blank">
              <li><Image src="/assets/icons/cv-icon.svg" alt="" height={20} width={20}/></li>
          </Link>
          <CustomLink name="Home" url="#home" className="p-[10px]"/>
          <CustomLink name="Works" url="#works" className="p-[10px]"/>
          <CustomLink name="About" url="#about" className="p-[10px]"/>
          <CustomLink name="Contact" url="#contact" className="p-[10px]"/>
          {/*<li className="p-[10px]">Home</li>*/}
          {/*<li className="p-[10px]">Works</li>*/}
          {/*<li className="p-[10px]">About</li>*/}
          {/*<li className="p-[10px]">Contact</li>*/}
      </ul>
    </div>
  )
}

export default NavigationMenuBar