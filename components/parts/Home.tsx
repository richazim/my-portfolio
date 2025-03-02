"use client"
import React, {useRef} from 'react'
import Header from './Header'
import Profile from '../Profile'
import NavigationMenuBar from "@/components/NavigationMenuBar";
import StickyCursor from "@/components/StickyCursor";

const Home = () => {
    const stickyElement = useRef<HTMLAnchorElement>(null);

  return (
    <section id="home" className='relative h-[100vh] overflow-auto text-white bg-black'>
        <Header ref={stickyElement}/>

        <div className="text-[#ffc107]">
            <Profile/>
        </div>

        <div className="flex flex-row md:justify-between justify-center mb-[20px] px-[40px]">
          <div className="flex flex-col">
            <p>Self-taught Fullstack Developper.</p>
            <p>I build website from start to finish.</p>
          </div>

          <div className="md:flex hidden flex-col ">
            <p>You don&#39;t have to worry again about hiring</p>
            <p>both frontend and backend developper.</p>
          </div>
        </div>

        <div className="absolute w-full bottom-[30px] flex justify-center items-center">
            <NavigationMenuBar/>
        </div>

        <StickyCursor stickyElement={stickyElement}/>
    </section>
  )
}

export default Home