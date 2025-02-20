"use client"
import React from 'react'
import WorkCard from "@/components/WorkCard";

const worksData = [
  {
    id: 1,
    title: 'regags',
    description: 'Community based fun social media app created by richazim to help programmers have fun during day',
    technologies: ["React Native", "Appwrite"],
    githubLink: 'https://github.com/richaziam/regags',
    demoLink: '',
    demoImagePath: '/assets/images/regags.png'
  },
  {
    id: 2,
    title: 'regags',
    description: 'Community based fun social media app created by richazim to help programmers have fun during day',
    technologies: ["React Native", "Appwrite"],
    githubLink: 'https://github.com/richaziam/regags',
    demoLink: '',
    demoImagePath: '/assets/images/regags.png'
  }
]

const Works = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {
        worksData.map((item) => (
            <WorkCard
                key={item.id} // special
                id={item.id}
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
  )
}

export default Works