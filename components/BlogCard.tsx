import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {truncateText} from "@/utils/truncateText";

const BlogCard = ({
    title,
    thumbnail,
    link,
    date
                  }: {title: string, thumbnail: string, link: string, date: string}) => {

    return (
        <div className="rounded-xl block border px-[10%] mx-auto shadow-[0_0_39px_7px_rgba(0,0,0,0.38)] text-black">
            <div className="rounded-xl overflow-hidden mt-[10%] mb-[10px] border">
                <Image src={thumbnail} alt="" height={100} width={180} className="border object-cover h-full w-full"/>
            </div>

            <h3 className="text-[20px] font-bold uppercase break-all">{truncateText(title, 20)}</h3>

            <div className="flex flex-row justify-between items-center">
                <span className="">{date}</span>

                <Link href={link} target="_blank" className="w-[50px] h-[50px] bg-[#000] rounded-full flex justify-center items-center my-[20px]">
                    <Image src="/assets/icons/arrow_right.svg" alt="" width={32} height={18}/>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;