"use client"
import { revealBoxOne } from '@/animations/element/revealBox';
import { revealTitleTwo } from '@/animations/text/revealText';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'

const Profile = () => {
  const refAzim = useRef<HTMLSpanElement>(null);
  const refSaibou = useRef<HTMLSpanElement>(null);
  const refProfilePicture = useRef<HTMLDivElement>(null);
  
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {

        revealTitleTwo(refAzim.current, refSaibou.current);

        revealBoxOne(refProfilePicture.current, {
          opacity: 0,
          scale: 0,
          y: 50
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          delay: 7,
          duration: 1
        })
        
      });
  
      return () => ctx.revert();
    }, []);

  return (
    <div className='h-[500px] relative'>
        <h2 className='font-bold text-center w-full h-[500px] md:text-[210px] text-[80px] leading-none relative flex flex-col items-center overflow-hidden'>
            <span ref={refAzim} className='md:relative absolute md:top-0 top-[105px] text-[#ffc107]'>AZIM</span>
            <span ref={refSaibou} className='absolute top-[175px] text-[#e4ded7]'>SAIBOU</span>
        </h2> 

        <div ref={refProfilePicture} className='rounded-[20px] w-[210px] h-[210px] overflow-hidden absolute left-[50%] translate-x-[-50%] bottom-[16px]'>
            <Image src="/assets/images/az.jpg" alt="" height={378} width={307} className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}
// La syntaxe ! à la fin de élément est une syntaxe de typescript qui permet de dire que "element ne sera pas nul"
export default Profile