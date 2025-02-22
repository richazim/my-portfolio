"use client"
import React from 'react'
import Image from "next/image";
import ContactMenuBar from "@/components/ContactMenuBar";

const Contact = () => {
  return (
    <div className="font-bold font-monaSans">
      <div className="relative flex justify-center items-center">
          <h3 className="text-[120px] text-center">LET'S TALK</h3>
          <Image src="/assets/3d/hands_making_heart.png" alt="" width={200} height={200} className="absolute top-[70px]"/>
      </div>

        <div className="flex flex-row justify-between">
            <div className="w-[300px] break-all flex  flex-col justify-between gap-[20px]">
                <p>Got a question, proposal project or want to work together on something?</p>
                <p><span>Send me an email</span> or <span>Book a call</span></p>
            </div>

            <ContactMenuBar/>
        </div>
    </div>
  )
}

export default Contact