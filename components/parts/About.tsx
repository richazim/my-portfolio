"use client"
import React from 'react'

const frontendTools = [
    'HTML/CSS',
    'JavaScript (ES6+, TypeScript)',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Figma',
    'GSAP',
    'Framer Motion',
    'Jest'
]

const backendTools = [
    'Node.js ',
    'Next.js',
    'PHP',
    'PHPUnit',
    'Laravel',
    'MySQL',
    'SQLite',
    'RESTful APIs',
    'JWT',
    'WebSockets',
    'Appwrite'
]

const About = () => {
  return (
    <div>
        <p className="text-[70px] font-bold font-monaSans">I DEVELOP CLEAN CODE, ROBUST APPLICATIONS AND SEAMLESS USER EXPERIENCES.</p>

        <div className="flex flex-row justify-between gap-[50px] leading-7 mt-[50px]">
            <section className="paragraphs flex flex-col justify-between gap-[20px] text-[20px] font-bold">
                <p>I specialize in creating high-converting landing pages and websites for SaaS, Web3 & AI startups. I’m passionate about building impactful software.</p>

                <p>Outside of frontend development, I'm an active leader in tech communities. As a member of Google Developer Student Clubs and Microsoft Learn Student Ambassadors, I lead workshops and mentor others.</p>

                <p>When I'm not coding, I’m watching anime, hanging out with friends, supporting Manchester United, or exploring new music genres like RnB, UK Drill, and Chill Rap.</p>

                <p>I’m currently working on exciting projects that I can’t wait to share, but I’m always open to new opportunities and collaborations.</p>
            </section>

            <aside className='flex flex-col justify-between gap-[10px]'>
                <div>
                    <h3 className="text-[20px] font-bold">Frontend Tools</h3>
                    <p>{frontendTools.join(', ') + '.'}</p>
                </div>

                <div>
                    <h3 className="text-[20px] font-bold">Backend Tools</h3>
                    <p>{backendTools.join(', ') + '.'}</p>
                </div>
            </aside>
        </div>
    </div>
  )
}

export default About