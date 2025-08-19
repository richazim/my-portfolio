import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import {truncateText} from "@/lib/utils/truncateText";
import { useRevealCharactersOnScrollOne } from "@/hooks/useRevealCharactersScroll";
import { useRevealTextOnScroll } from "@/hooks/useRevealTextScroll";

export const WorkCardDescription = ({
                              id,
                              title,
                              description,
                              technologies,
                              githubLink,
                              demoLink,
                          } : WorkCardLeftPartProps) =>{
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paragraphOneRef = useRef<HTMLParagraphElement>(null);
    const paragraphTwoRef = useRef<HTMLParagraphElement>(null);
    
    useRevealCharactersOnScrollOne(titleRef);
    useRevealTextOnScroll(paragraphOneRef);
    useRevealCharactersOnScrollOne(paragraphTwoRef);
    
    
    return (
        <div className="px-[50px] relative h-[400px] text-white">
            
        <div className={`links mt-[20px] ${(id % 2 !== 0) && 'right-[30px]'} w-[170px] flex flex-row justify-between`}>
            <Link href={githubLink} target="_blank" className="h-[70px] w-[70px] bg-[#fff] rounded-full flex justify-center items-center">
                <Image src="/assets/icons/github.svg" alt="" height={41} width={40}/>
            </Link>

            {demoLink && (
                <Link href={demoLink} target="_blank" className="h-[70px] w-[70px] rounded-full flex justify-center items-center">
                    <Image src="/assets/icons/link.svg" alt="" height={30} width={30}/>
                </Link>
            )}
        </div>

        <div className="mt-[50px] ">
            <h4 ref={titleRef} className={`width-full break-normal md:break-all ${(id % 2 !== 0) && 'right-[30px]'} text-4xl sm:text-6xl lg:text-4xl xl:text-5xl font-bold capitalize`}>{title}</h4>

            <p ref={paragraphOneRef} className={` text-left ${(id % 2 !== 0) && 'right-[30px] '} text-[14px] md:text-[16px] lg:text-[18px] normal-case text-[#95979D]`}>{truncateText(description, 60)}</p>
        </div>

        <p ref={paragraphTwoRef} className={`mt-[20px] text-[#fff] text-[9px] sm:text-sm sm:font-bold ${(id % 2 !== 0) && 'right-[30px]'} gap-[10px] text-[15px] uppercase`}>
            {technologies.map((element) => {
                return (
                    <span key={element} className="mx-3">{element}</span>
                )
            })}
        </p>
    </div>
    )
}
;
    export default WorkCardDescription;

    // Lorsque la carte est impaire (1, 3): la description est sur la gauche
    // Lorsque la carte est paire (0, 2): la description est sur la droite