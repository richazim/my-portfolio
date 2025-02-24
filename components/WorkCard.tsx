import React from 'react';
import Image from "next/image";
import Link from "next/link";

type Props = {
    id: number,
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    demoImagePath: string,
    switchCase?: boolean
}

export const FirstCase = ({
                       title,
                       description,
                       technologies,
                       githubLink,
                       demoLink,
                       switchCase,
                   } : {title: string, description: string, technologies: string[], githubLink: string, demoLink: string, switchCase?: boolean}) =>

    <div className="px-[50px] relative h-[400px]">
        <div className={`links absolute top-[20px] ${switchCase && 'right-[30px]'} w-[170px] flex flex-row justify-between`}>
            <Link href={githubLink} target="_blank" className="h-[70px] w-[70px] bg-white rounded-full flex justify-center items-center">
                <Image src="/assets/icons/github.svg" alt="" height={30} width={30}/>
            </Link>

            <Link href={demoLink} target="_blank" className="h-[70px] w-[70px] bg-white rounded-full flex justify-center items-center">
                <Image src="/assets/icons/link.svg" alt="" height={30} width={30}/>
            </Link>
        </div>

        <h4 className={`absolute top-[150px] ${switchCase && 'right-[30px]'} text-[70px] font-bold capitalize`}>{title}</h4>

        <p className={`absolute top-[250px] ${switchCase && 'right-[30px] text-right'} text-[20px] font-bold capitalize text-[#333]`}>{description}</p>

        <p className={`absolute top-[320px] ${switchCase && 'right-[30px]'} flex flex-row justify-between gap-[20px] font-bold text-[25px] uppercase`}>
            {technologies && technologies.map((technology, index) => (
                <span key={index}>{technology}</span>
            ))}
        </p>
    </div>
;

export const SecondCase = ({
                            demoImagePath,
                            switchCase,
                        } : {demoImagePath: string, switchCase?: boolean}) =>
        <div className="relative h-[400px]">
            <div className="absolute overflow-hidden h-full w-full">
                <div className={`absolute h-[500px] xl:w-[500px] lg:w-[400px] md:w-[300px] w-[250px] ${!switchCase ? 'right-[-50px]' : 'left-[-50px]'} top-[50px] overflow-hidden rounded-xl shadow-lg`}>
                    <Image src={demoImagePath} alt="" layout="fill" className=""/>
                </div>
            </div>
        </div>
;

const WorkCard = ({
    id,
    title,
    description,
    technologies,
    githubLink,
    demoLink,
    demoImagePath,
    switchCase
                  } : Props) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[800px] lg:h-[400px] w-[100%] rounded-xl overflow-hidden bg-[#000]">
            {!switchCase ? (
                // FirstCase({
                //     title,
                //     description,
                //     technologies,
                //     githubLink,
                //     demoLink,
                // })
                <>
                    <FirstCase title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink} switchCase={switchCase} />
                    <SecondCase demoImagePath={demoImagePath} switchCase={switchCase}/>
                </>
            ): (
                <>
                    <SecondCase demoImagePath={demoImagePath} switchCase={switchCase}/>
                    <FirstCase title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink} switchCase={switchCase}/>
                </>
            )}
        </div>
    );
};

export default WorkCard;