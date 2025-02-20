"use client"
import React from 'react'
import Header from './Header'
import Profile from './Profile'

const Home = () => {
  return (
    <section>
        <Header/>

        <div className="">
            <h1>AZIM <br /> SAIBOU</h1>
            <Profile/>
        </div>
    </section>
  )
}

export default Home