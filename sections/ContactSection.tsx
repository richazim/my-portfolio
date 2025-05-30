"use client";
import React from 'react'
import Image from "next/image";
import ContactMenuBar from "@/components/ContactMenuBar";

const ContactSection = () => {
  return (
    <div id="contact" className="font-monaSans">
      <div className="relative flex justify-center items-center text-[#ffc107] font-bold">
          <h3 className="md:text-[120px] text-[90px] text-center capitalize">Discutons</h3>
          <Image src="/assets/3d/hands_making_heart.png" alt="" width={2000} height={1081} className="absolute top-[70px] h-[70px] w-[200px]"/>
      </div>

      <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-[50px] text-[#e4ded7] font-[700]">
          <div className="w-[400px] break-words flex  flex-col justify-between gap-[20px]">
              <p>Vous avez une question, une proposition de projet ou souhaitez collaborer sur quelque chose ?</p>
              <p className=''><a href="mailto:saibouazim90@gmail.com" className="underline-offset-4 underline uppercase">Envoyez-moi un email</a> ou <a href="https://calendar.app.google/1D7fTGDA1MQHfgxx9" target="_blank" className="underline underline-offset-4 uppercase">Réservez un appel</a></p>
          </div>

          <ContactMenuBar/>
      </div>
    </div>
  )
}

export default ContactSection