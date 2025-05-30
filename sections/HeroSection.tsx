"use client";
import React from 'react'
import Profile from '@/components/Profile'
import NavigationMenuBar from "@/components/NavigationMenuBar";
import HeaderSection from './NavSection';

const HeroSection = () => {

  return (
    <section id="hero" className='relative h-[100vh] overflow-auto bg-black'>
        <HeaderSection/>

        <div>
            <Profile/>
        </div>

        <div className="flex flex-row md:justify-between justify-center mb-[20px] px-[40px]">
          <div className="flex flex-col text-[#e4ded7]">
            <p>Self-taught Fullstack Developper.</p>
            <p>I build websites from start to finish.</p>
          </div>

          <div className="md:flex hidden flex-col text-[#e4ded7]">
            <p>You don&#39;t have to worry again about hiring</p>
            <p>both frontend and backend developper.</p>
          </div>
        </div>

        <NavigationMenuBar/>

        {/* <StickyCursor stickyElement={stickyHeaderRef}/> */}
    </section>
  )
}

export default HeroSection