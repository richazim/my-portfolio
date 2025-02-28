"use client"
import React from 'react'
import Image from "next/image";
import ContactMenuBar from "@/components/ContactMenuBar";

const Contact = () => {
  return (
    <div id="contact" className="font-bold font-monaSans">
      <div className="relative flex justify-center items-center">
          <h3 className="text-[120px] text-center">LET&#39;S TALK</h3>
          <Image src="/assets/3d/hands_making_heart.png" alt="" width={2000} height={1081} className="absolute top-[70px] h-[70px] w-[200px]"/>
      </div>

        <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-[50px]">
            <div className="w-[300px] break-all flex  flex-col justify-between gap-[20px]">
                <p>Got a question, proposal project or want to work together on something?</p>
                <p><span className="underline-offset-4 underline uppercase">Send me an email</span> or <span className="underline underline-offset-4 uppercase">Book a call</span></p>
            </div>

            <ContactMenuBar/>
        </div>
    </div>
  )
}

export default Contact