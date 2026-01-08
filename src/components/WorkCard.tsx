import React from 'react';
import WorkCardDescription from "@/components/WorkCardDescription";
import WorkCardImage from "@/components/WorkCardImage";


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
                    <WorkCardDescription id={id} title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink}/>
                    <WorkCardImage id={id} demoImagePath={demoImagePath}/>
                </>
            ): (
                <>
                    <WorkCardImage id={id} demoImagePath={demoImagePath}/>
                    <WorkCardDescription id={id} title={title} description={description} technologies={technologies} githubLink={githubLink} demoLink={demoLink}/>
                </>
            )}
        </div>
    );
};

export default WorkCard;