import Link from "next/link";
import Image from "next/image";
import React from "react";
import {truncateText} from "@/utils/truncateText";

export const WorkCardLeftPart = ({
                              title,
                              description,
                              technologies,
                              githubLink,
                              demoLink,
                              switchCase,
                          } : WorkCardLeftPartProps) =>

    <div className="px-[50px] relative h-[400px]">
        <div className={`links absolute top-[20px] ${switchCase && 'right-[30px]'} w-[170px] flex flex-row justify-between`}>
            <Link href={githubLink} target="_blank" className="h-[70px] w-[70px] bg-[#2b2b2b] rounded-full flex justify-center items-center">
                <Image src="/assets/icons/github.svg" alt="" height={41} width={40}/>
            </Link>

            <Link href={demoLink} target="_blank" className="h-[70px] w-[70px] rounded-full flex justify-center items-center">
                <Image src="/assets/icons/link.svg" alt="" height={30} width={30}/>
            </Link>
        </div>

        <h4 className={`absolute top-[150px] ${switchCase && 'right-[30px]'} text-[70px] text-[#2b2b2b] font-bold capitalize`}>{title}</h4>

        <p className={`absolute top-[250px] ${switchCase && 'right-[30px] text-right'} text-[20px] capitalize text-[#330c2f]`}>{truncateText(description, 60)}</p>

        <p className={`absolute top-[350px] text-[#ffc107] ${switchCase && 'right-[30px]'} flex flex-row justify-between gap-[20px] font-bold text-[25px] uppercase`}>
            {technologies && technologies.map((technology, index) => (
                <span key={index}>{technology}</span>
            ))}
        </p>
    </div>
;
    export default WorkCardLeftPart;