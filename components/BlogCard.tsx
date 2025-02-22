import React from 'react';
import Image from "next/image";

const BlogCard = ({
    title,
    thumbnail,
    link,
    date
                  }: {title: string, thumbnail: string, link: string, date: string}) => {
    return (
        <div className="h-[480px] w-[340px] rounded-xl border px-[30px] relative">
            <div className="rounded-xl overflow-hidden mt-[30px] mb-[10px]">
                <Image src={thumbnail} alt="" height={120} width={280} className="border object-cover"/>
            </div>

            <h3 className="text-[20px] font-bold uppercase break-all">{title}</h3>

            <div className="flex flex-row justify-between items-center absolute bottom-[30px] w-[280px]">
                <span className="font-bold">{date}</span>

                <span className="w-[50px] h-[50px] bg-[#000] rounded-full flex justify-center items-center">
                    <Image src="/assets/icons/arrow_right.svg" alt="" width={24} height={24}/>
                </span>
            </div>
        </div>
    );
};

export default BlogCard;