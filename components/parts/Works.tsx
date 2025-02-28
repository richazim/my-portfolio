"use client"
import React from 'react'
import WorkCard from "@/components/WorkCard";
import {WORKS_DATA} from "@/constants";

const Works = () => {
  return (
    <div id="works" className="flex flex-col gap-[50px] pt-[90px]">
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
  )
}

export default Works