import React from 'react';
import Image from "next/image";

const CommentCard = ({
    name,
    profile,
    profession,
    location,
    comment
                     } : {name: string, profile: string, profession: string, location: string, comment: string}) => {
    return (
        <div className="border border-gray-200 w-full p-[20px] text-black shadow-[0_0_39px_7px_rgba(0,0,0,0.38)]">
            <div className="lines">
                <Image src="/assets/icons/comment-card-design.svg" alt="" height={24} width={166} className="w-[100px]" />
            </div>

            <p className='mt-[10px]'>{comment}</p>

            <div className="profile flex flex-row items-center mt-[50px]">
                <Image src={profile} alt='' height={40} width={40} className='rounded-full' />

                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <h4 className="font-bold">{name}</h4>
                    <p><span>{profession}</span> <span> @ </span> <span>{location}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;