"use client"
import { revealSection } from '@/animations/reveal/sectionsRevealer';
import ContactMenuBar from '@/components/ContactMenuBar'
import Link from "next/link";
import { useLayoutEffect, useRef } from 'react';

const NavSection = () => {
  const navSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if(!navSectionRef.current) return;
    revealSection(navSectionRef.current, 50, 0, 5.5);
  })
  return (
    <div ref={navSectionRef} className="flex flex-row sm:justify-between justify-center py-[30px] px-[30px] font-bold">
        <Link href="https://www.freelancer.com/u/richazim" className={"font-bold border-[3px] py-[7px] px-[10px] hidden sm:block pointer-events-auto rounded-[7px]"} target="_blank">
            <span>HIRE ME HERE</span>
        </Link>

        <ContactMenuBar/>
    </div>
  )
}


export default NavSection