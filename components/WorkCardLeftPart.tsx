import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import {truncateText} from "@/lib/utils/truncateText";
import { useRevealCharactersOnScrollOne } from "@/hooks/useRevealCharactersScroll";
import { useRevealTextOnScroll } from "@/hooks/useRevealTextScroll";

export const WorkCardLeftPart = ({
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
        <div className={`links absolute top-[20px] ${(id % 2 !== 0) && 'right-[30px]'} w-[170px] flex flex-row justify-between`}>
            <Link href={githubLink} target="_blank" className="h-[70px] w-[70px] bg-[#fff] rounded-full flex justify-center items-center">
                <Image src="/assets/icons/github.svg" alt="" height={41} width={40}/>
            </Link>

            <Link href={demoLink} target="_blank" className="h-[70px] w-[70px] rounded-full flex justify-center items-center">
                <Image src="/assets/icons/link.svg" alt="" height={30} width={30}/>
            </Link>
        </div>

        <h4 ref={titleRef} className={`absolute top-[150px] ${(id % 2 !== 0) && 'right-[30px]'} text-[60px] font-bold capitalize`}>{title}</h4>

        <p ref={paragraphOneRef} className={`absolute top-[250px] ${(id % 2 !== 0) && 'right-[30px] text-right'} text-[14px] md:text-[16px] lg:text-[18px] normal-case text-[#95979D]`}>{truncateText(description, 60)}</p>

        <p ref={paragraphTwoRef} className={`absolute top-[350px] text-[#fff] ${(id % 2 !== 0) && 'right-[30px]'} flex flex-row justify-between gap-[10px] font-bold text-[15px] uppercase`}>
            {technologies.map((element) => {
                return (
                    <span key={element}>{element}</span>
                )
            })}
        </p>
    </div>
    )
}
;
    export default WorkCardLeftPart;