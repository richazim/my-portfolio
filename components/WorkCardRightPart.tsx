import Image from "next/image";
import React from "react";

export const WorkCardRightPart = ({
                               id,
                               demoImagePath
                           } : WorkCardRightPartProps) =>

    <div className="relative h-[400px]">
        <div className="absolute overflow-hidden h-full w-full">
            <div className={`absolute h-[500px] xl:w-[500px] lg:w-[400px] md:w-[300px] w-[250px] ${(id % 2 === 0) ? 'right-[-50px]' : 'left-[-50px]'} top-[50px] overflow-hidden rounded-xl shadow-lg`}>
                <Image src={demoImagePath} alt="" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=""/>
            </div>
        </div>
    </div>
;

    export default WorkCardRightPart;