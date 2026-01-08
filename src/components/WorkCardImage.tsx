import Image from "next/image";
import React from "react";

export const WorkCardImage = ({
                               id,
                               demoImagePath
                           } : WorkCardRightPartProps) => {
        
    return (
    <div className="relative h-[400px]">
        <div className="absolute overflow-hidden h-full w-full">
            <div className={`absolute h-[500px] xl:w-full lg:w-[90%] md:w-full w-[90%] px-[5px] ${(id % 2 === 0) ? 'md:right-[-10px] md:left-auto md:translate-x-0 left-[50%] translate-x-[-50%]' : 'md:left-[-10px] md:translate-x-0 left-[50%] translate-x-[-50%]'} top-[50px] overflow-hidden shadow-lg`}>
                {/* <Image src={demoImagePath} alt="" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=" bg-contain"/> */}
                <Image src={demoImagePath} alt="" height={700} width={500} className=" bg-contain rounded-xl"/>
            </div>
        </div>
    </div>
    )
}

export default WorkCardImage;