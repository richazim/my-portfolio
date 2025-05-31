"use client";
import { backendTools, frontendTools } from '@/data/my-tools';
import { useRevealCharactersOnScrollTwo } from '@/hooks/useRevealCharactersScroll';
import React, { useRef } from 'react'

const AboutSection = () => {
    const paragraphOneRef = useRef<HTMLParagraphElement>(null);
    
    useRevealCharactersOnScrollTwo(paragraphOneRef);

  return (
    <div id="about">
        <p ref={paragraphOneRef} className="initial-css-for-characters-reveal-animation sm:text-[70px] text-[50px]  font-bold font-monaSans text-[#ffc107]">JE DÉVELOPPE DU CODE PROPRE, DES APPLICATIONS ROBUSTES ET DES EXPÉRIENCES UTILISATEUR FLUIDES.</p>

        <div className="flex md:flex-row flex-col justify-between gap-[50px] mt-[50px] text-[#e4ded7] font-medium  leading-relaxed tracking-wide">
            <section className="paragraphs flex flex-col justify-between gap-[20px] text-[20px] ">
                <p>Je me spécialise dans la création de pages de destination et de sites web à fort taux de conversion pour les startups SaaS, Web3 et IA. Je suis passionné par le développement de logiciels percutants.</p>

                <p>En dehors du développement frontend, je suis un leader actif dans les communautés technologiques. En tant que membre des Google Developer Student Clubs et des Microsoft Learn Student Ambassadors, je dirige des ateliers et j&apos;accompagne d&apos;autres personnes.</p>

                <p>Quand je ne code pas, je regarde des anime, je passe du temps avec mes amis, je soutiens Manchester United ou j&apos;explore de nouveaux genres musicaux comme le RnB, le UK Drill et le Chill Rap.</p>

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