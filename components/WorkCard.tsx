import React from 'react';
import WorkCardLeftPart from "@/components/WorkCardLeftPart";
import WorkCardRightPart from "@/components/WorkCardRightPart";


const WorkCard = ({
    title,
    description,
    technologies,
    githubLink,
    demoLink,
    demoImagePath,
    switchCase
                  } : WorkCardProps) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[800px] lg:h-[400px] w-[100%] rounded-xl overflow-hidden bg-[#070a1f]">
            {!switchCase ? (
                // FirstCase({
                //     title,
                //     description,
                //     technologies,
                //     githubLink,
                //     demoLink,
                // })
                <>
                    <WorkCardLeftPart title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink} switchCase={switchCase} />
                    <WorkCardRightPart demoImagePath={demoImagePath} switchCase={switchCase}/>
                </>
            ): (
                <>
                    <WorkCardRightPart demoImagePath={demoImagePath} switchCase={switchCase}/>
                    <WorkCardLeftPart title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink} switchCase={switchCase}/>
                </>
            )}
        </div>
    );
};

export default WorkCard;