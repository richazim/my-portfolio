import React from 'react';
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
    title,
    thumbnail,
    link,
    date
                  }: {title: string, thumbnail: string, link: string, date: string}) => {

    return (
        <Link href={link} className="rounded-xl border px-[10%] mx-auto">
            <div className="rounded-xl overflow-hidden mt-[10%] mb-[10px] border">
                <Image src={thumbnail} alt="" height={100} width={180} className="border object-cover h-full w-full"/>
            </div>

            <h3 className="text-[20px] font-bold uppercase break-all">{title}</h3>

            <div className="flex flex-row justify-between items-center">
                <span className="font-bold">{date}</span>

                <span className="w-[50px] h-[50px] bg-[#000] rounded-full flex justify-center items-center">
                    <Image src="/assets/icons/arrow_right.svg" alt="" width={24} height={24}/>
                </span>
            </div>
        </Link>
    );
};

export default BlogCard;