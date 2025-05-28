"use client"
import { revealStrings } from '@/animations/reveal/textsRevealer';
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'

const Profile = () => {
    const namesRefs = useRef<(HTMLSpanElement[])>([]);
  
    useLayoutEffect(() => {
      if(!namesRefs.current) return;
      revealStrings(namesRefs.current)
    }, [])

  return (
    <div className='h-[500px] relative'>
        <h2 className='font-bold text-center w-full h-[500px] md:text-[210px] text-[80px] leading-none relative flex flex-col items-center overflow-hidden'>
            <span ref={(element) => { namesRefs.current[0] = element!}} className='md:relative absolute md:top-0 top-[105px]'>AZIM</span>
            <span ref={(element) => { namesRefs.current[1] = element!}} className='absolute top-[175px]'>SAIBOU</span>
        </h2> 

        <div className='rounded-[20px] w-[200px] h-[200px] overflow-hidden absolute left-[50%] translate-x-[-50%] bottom-[16px]'>
            <Image src="/assets/images/profile.png" alt="" height={200} width={200} />
        </div>
    </div>
  )
}
// La syntaxe ! à la fin de élément est une syntaxe de typescript qui permet de dire que "element ne sera pas nul"
export default Profile