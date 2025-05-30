import React from 'react';
import Image from "next/image";
import { ClientComment } from '@/types/testimonies';

const CommentCard = ({
    name,
    profile,
    profession,
    location,
    comment
                     } : ClientComment) => {
    return (
        <div className="w-full p-[20px] shadow-[0_0_39px_7px_rgba(0,0,0,0.38)] rounded-[23px] border-[3px] border-[#212531] bg-transparent">
            <div className="lines">
                <Image src="/assets/icons/comment-card-design.svg" alt="" height={24} width={166} className="w-[100px]" />
            </div>

            <p className='mt-[10px] text-[#e4ded7]'>{comment}</p>

            <div className="profile flex flex-row items-center mt-[50px]">
                <Image src={profile} alt='' height={40} width={40} className='rounded-full' />

                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <h4 className="font-bold text-[#fff] text-[23px] leading-[23px]">{name}</h4>
                    <p className='text-[#95979D] font-[500]'><span>{profession}</span> <span> @ </span> <span>{location}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;