"use client";
import React, { useRef } from 'react'
import WorkCard from "@/components/WorkCard";
import { useRevealTextOnScroll } from '@/hooks/useRevealTextScroll';
import { useRevealCharactersOnScrollOne } from '../hooks/useRevealCharactersScroll';
import { WORKS_DATA } from '@/data/works';

const WorksSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphOneRef = useRef<HTMLParagraphElement>(null);
  const paragraphTwoRef = useRef<HTMLParagraphElement>(null);
  
  useRevealTextOnScroll(titleRef);
  useRevealCharactersOnScrollOne(paragraphOneRef);
  useRevealCharactersOnScrollOne(paragraphTwoRef);
  
  return (
      <div id="works">
        <div className="titles text-center font-bold font-monaSans text-[#fff]">
          <h3 ref={titleRef} className="xl:text-[120px] lg:text-[100px] md:text-[70px] sm:text-[50px] text-[40px] text-[#ffc107]">PROJETS</h3>
          <p ref={paragraphOneRef}>PROJETS QUE J&apos;AI DÉJÀ RÉALISÉS</p>
          <p ref={paragraphTwoRef}>PROJETS PERSONNELS - FREELANCE</p>
        </div>
        <div className="flex flex-col gap-[50px] pt-[20px]">
          {
            WORKS_DATA.map((item, id) => (
                <WorkCard
                    key={id} // special
                    id={id}
                    title={item.title}
                    description={item.description}
                    technologies={item.technologies}
                    githubLink={item.githubLink}
                    demoLink={item.demoLink}
                    demoImagePath={item.demoImagePath}
                />
            ))
          }
        </div>
      </div>
  )
}

export default WorksSection