"use client";
import { backendTools, frontendTools } from '@/data/my-tools';
import { useRevealCharactersOnScrollTwo } from '@/hooks/useRevealCharactersScroll';
import { cn } from '@/lib/utils/cn';
import React, { useRef } from 'react'

const AboutSection = () => {
    const paragraphOneRef = useRef<HTMLParagraphElement>(null);
    
    useRevealCharactersOnScrollTwo(paragraphOneRef);

  return (
    <div id="about">
        <p ref={paragraphOneRef} 
            className={cn(
                "initial-css-for-characters-reveal-animation",
                "sm:text-[70px] text-[50px]  font-bold font-monaSans text-[#ffc107]"
            )}
        >
            JE DÉVELOPPE DU CODE PROPRE, DES APPLICATIONS ROBUSTES ET DES EXPÉRIENCES UTILISATEUR FLUIDES.
        </p>

        <div className="flex md:flex-row flex-col justify-between gap-[50px] mt-[50px] text-[#e4ded7] font-medium  leading-relaxed tracking-wide">
            <section className="paragraphs flex flex-col justify-between gap-[20px] text-[20px] ">
                <p>Je suis développeur fullstack web & mobile, spécialisé dans la création d’expériences modernes et performantes.</p>

                <p>J’utilise principalement React, Next.js et React Native pour le frontend, associés à Laravel et PHP pour des backends robustes et bien structurés.</p>

                <p>De l’interface utilisateur fluide à l’architecture serveur optimisée, je maîtrise chaque couche d’un projet. J’intègre aussi GSAP pour animer les interfaces de manière fluide et immersive.</p>

                <p>Je travaille actuellement sur des projets excitants que j’ai hâte de partager, mais je suis toujours ouvert à de nouvelles opportunités et collaborations.</p>
            </section>

            <aside className='flex flex-col justify-between gap-[30px]'>
                <div>
                    <h3 className="text-[20px] font-bold">Outils Frontend</h3>
                    <p>{frontendTools.join(', ') + '.'}</p>
                </div>

                <div>
                    <h3 className="text-[20px] font-bold">Outils Backend</h3>
                    <p>{backendTools.join(', ') + '.'}</p>
                </div>
            </aside>
        </div>
    </div>
  )
}

export default AboutSection