"use client"
import React, {useLayoutEffect} from 'react'
import Profile from '@/components/Profile'
import NavigationMenuBar from "@/components/NavigationMenuBar";
import HeaderSection from './NavSection';

const HeroSection = () => {
    

    useLayoutEffect(() => {
      
    }, [])

  return (
    <section id="hero" className='relative h-[100vh] overflow-auto text-white bg-black'>
        <HeaderSection/>

        <div className="text-[#ffc107]">
            <Profile/>
        </div>

        <div className="flex flex-row md:justify-between justify-center mb-[20px] px-[40px]">
          <div className="flex flex-col">
            <p>Self-taught Fullstack Developper.</p>
            <p>I build websites from start to finish.</p>
          </div>

          <div className="md:flex hidden flex-col ">
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