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
        <div className="border border-[#333] w-full p-[20px]">
            <div className="lines">
                <Image src="/assets/icons/comment-card-design.svg" alt="" height={24} width={166} />
            </div>

            <p className='mt-[10px]'>{comment}</p>

            <div className="profile flex flex-row items-center mt-[50px]">
                <Image src={profile} alt='' height={40} width={40} className='rounded-full' />

                <div className="flex-1 ml-[10px] flex flex-col justify-between">
                    <h4>{name}</h4>
                    <p><span>{profession}</span> <span> @ </span> <span>{location}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;