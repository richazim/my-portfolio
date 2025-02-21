"use client"
import React from 'react'
import Image from "next/image";
import ContactMenuBar from "@/components/ContactMenuBar";

const Contact = () => {
  return (
    <div>
      <div>
          <h3 className="text-[100px] font-bold font-monaSans text-center">LET'S TALK</h3>
          {/*<Image src="/assets/icons/3d_hands_heart.jpg" alt="" width={400} height={400}/>*/}
      </div>

        <div>
            <div>
                <p>Got a question, proposal project or want to work together on something?</p>
                <p><span>Send me an email</span> or <span>Book a call</span></p>
            </div>

            <ContactMenuBar/>
        </div>
    </div>
  )
}

export default Contact