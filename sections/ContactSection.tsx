"use client";
import React from 'react'
import Image from "next/image";
import ContactMenuBar from "@/components/ContactMenuBar";

const ContactSection = () => {
  return (
    <div id="contact" className="font-monaSans">
      <div className="relative flex justify-center items-center text-[#ffc107] font-bold">
          <h3 className="text-[120px] text-center">LET&#39;S TALK</h3>
          <Image src="/assets/3d/hands_making_heart.png" alt="" width={2000} height={1081} className="absolute top-[70px] h-[70px] w-[200px]"/>
      </div>

        <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-[50px] text-[#e4ded7]">
            <div className="w-[300px] break-all flex  flex-col justify-between gap-[20px]">
                <p>Got a question, proposal project or want to work together on something?</p>
                <p><a href="mailto:saibouazim90@gmail.com" className="underline-offset-4 underline uppercase">Send me an email</a> or <a href="https://calendar.app.google/1D7fTGDA1MQHfgxx9" target="_blank" className="underline underline-offset-4 uppercase">Book a call</a></p>
            </div>

            <ContactMenuBar/>
        </div>
    </div>
  )
}

export default ContactSection