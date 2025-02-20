"use client"
import React from 'react'
import Header from './Header'
import Profile from './Profile'
import NavigationMenuBar from "@/components/NavigationMenuBar";

const Home = () => {
  return (
    <section className='relative h-[100vh] bg-[url(/assets/images/hero-img.png)]'>
        <Header/>

        <div className="h-[500px] w-[900px] inline-block top-[50px] left-[50%] translate-x-[-50%] absolute"> 
            <Profile/>
        </div>

        <div className="flex flex-row justify-between mb-0 absolute w-[100%] bottom-[20px] px-[40px] ">
          <div className="flex flex-col">
            <p>Self-taught Fullstack Developper.</p>
            <p>I build website from start to finish.</p>
          </div>

          <div className="flex flex-col"> 
            <p>You don&#39;t have to worry again about hiring</p>
            <p>both frontend and backend developper.</p>
          </div>
        </div>

        <div className="absolute w-full bottom-[30px] flex justify-center items-center">
            <NavigationMenuBar/>
        </div>
    </section>
  )
}

export default Home