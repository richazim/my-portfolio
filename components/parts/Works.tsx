"use client"
import React from 'react'
import WorkCard from "@/components/WorkCard";
import {WORKS_DATA} from "@/constants";

const Works = () => {
  return (
      <div id="works">
        <div className="titles text-center font-bold font-monaSans text-[#ffc107]">
          <h3 className="xl:text-[120px] lg:text-[100px] md:text-[70px] sm:text-[50px] text-[40px] ">WORKS</h3>
          <p>PROJECT I HAVE ALREADY MADE</p>
          <p>WITH THEIR SOURCE CODES</p>
        </div>
        <div className="flex flex-col gap-[50px] pt-[20px]">
          {
            WORKS_DATA.map((item, id) => (
                <WorkCard
                    key={id} // special
                    title={item.title}
                    description={item.description}
                    technologies={item.technologies}
                    githubLink={item.githubLink}
                    demoLink={item.demoLink}
                    demoImagePath={item.demoImagePath}
                    switchCase={item.switchCase}
                />
            ))
          }
        </div>
      </div>
  )
}

export default Works