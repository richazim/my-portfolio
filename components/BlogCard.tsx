import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {truncateText} from "@/lib/utils/truncateText";
import { BlogCardProps } from '@/types/blogs';

const BlogCard = ({
    title,
    thumbnail,
    link,
    date
                  }: BlogCardProps) => {

    return (
        <div className="rounded-xl block px-[5%] mx-auto shadow-[0_0_39px_7px_rgba(0,0,0,0.38)] bg-[#212531]">
            <div className="rounded-xl overflow-hidden mt-[10%] mb-[10px] h-[150px] w-full ">
                <Image src={thumbnail} alt="" height={100} width={180} className="object-cover h-full w-full"/>
            </div>

            <h3 className="text-[20px] text-white font-bold uppercase break-all">{truncateText(title, 20)}</h3>

            <div className="flex flex-row justify-between items-center">
                <span className=" text-[#95979D] font-medium">{date}</span>

                <Link href={link} target="_blank" className="w-[50px] h-[50px] bg-[#000] rounded-full flex justify-center items-center my-[20px]">
                    <Image src="/assets/icons/arrow_right.svg" alt="" width={32} height={18}/>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;