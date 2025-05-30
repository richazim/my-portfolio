import React from 'react';
import WorkCardLeftPart from "@/components/WorkCardLeftPart";
import WorkCardRightPart from "@/components/WorkCardRightPart";


const WorkCard = ({
    id,
    title,
    description,
    technologies,
    githubLink,
    demoLink,
    demoImagePath
                  } : WorkCardProps) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[800px] lg:h-[400px] w-[100%] rounded-xl overflow-hidden bg-[#212531] shadow-[0_0_39px_7px_rgba(0,0,0,0.38)]">
            {(id % 2 ) === 0 ? (
                // FirstCase({
                //     title,
                //     description,
                //     technologies,
                //     githubLink,
                //     demoLink,
                // })
                <>
                    <WorkCardLeftPart id={id} title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink}/>
                    <WorkCardRightPart id={id} demoImagePath={demoImagePath}/>
                </>
            ): (
                <>
                    <WorkCardRightPart id={id} demoImagePath={demoImagePath}/>
                    <WorkCardLeftPart id={id} title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink}/>
                </>
            )}
        </div>
    );
};

export default WorkCard;