"use client";
import React from 'react'
import WorkCard from "@/components/WorkCard";
import {WORKS_DATA} from "@/constants";

const WorksSection = () => {
  
  return (
      <div id="works">
        <div className="titles text-center font-bold font-monaSans text-[#fff]">
          <h3 className="xl:text-[120px] lg:text-[100px] md:text-[70px] sm:text-[50px] text-[40px] text-[#ffc107]">PROJETS</h3>
          <p>PROJETS QUE J&apos;AI DÉJÀ RÉALISÉS</p>
          <p>AVEC LEURS CODES SOURCES</p>
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