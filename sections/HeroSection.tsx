"use client";
import React from 'react'
import Profile from '@/components/Profile'
import NavigationMenuBar from "@/components/NavigationMenuBar";
import HeaderSection from './NavSection';

const HeroSection = () => {

  return (
    <section id="hero" className='relative min-h-[100vh] overflow-auto bg-[#0E1016] css-bg-image'>
        <HeaderSection/>

        <div>
            <Profile/>
        </div>

        <div className="flex flex-row md:justify-between justify-center mb-[20px] px-[40px]">
          <div className="flex flex-col text-[#e4ded7]">
            <p>Développeur Fullstack autodidacte.</p>
            <p>Je construis des apps et sites web de A à Z.</p>
          </div>

          <div className="md:flex hidden flex-col text-[#e4ded7]">
            <p>Vous n&apos;avez plus à vous soucier d&apos;embaucher</p>
            <p>à la fois un développeur frontend et backend.</p>
          </div>
        </div>

        <NavigationMenuBar/>

        {/* <StickyCursor stickyElement={stickyHeaderRef}/> */}
    </section>
  )
}

export default HeroSection