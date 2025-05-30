"use client";
import { revealBoxOne } from '@/animations/reveal/revealBox';
import ContactMenuBar from '@/components/ContactMenuBar'
import Link from "next/link";
import { useLayoutEffect, useRef } from 'react';

const NavSection = () => {
  const navSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if(!navSectionRef.current) return;
    revealBoxOne(navSectionRef.current, {opacity: 0, y: 50}, {opacity: 1, y: 0, delay: 5.5, duration: 1});
  }, [])
  return (
    <div ref={navSectionRef} className="flex flex-row sm:justify-between justify-center py-[30px] px-[30px] font-bold">
        <Link href="https://www.freelancer.com/u/richazim" className="font-bold border-[3px] py-[7px] px-[10px] hidden sm:block pointer-events-auto rounded-[7px] text-[#e4ded7]" target="_blank">
            <span>EMBAUCHEZ-MOI ICI</span>
        </Link>

        <ContactMenuBar/>
    </div>
  )
}


export default NavSection