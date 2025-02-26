import React from 'react';
import CommentCard from "@/components/CommentCard";
import Image from "next/image";
import Link from "next/link";

const clientComments = [
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    },
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    },
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    },
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    },
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    },
    {
        name: 'Force Bernard C.',
        profile: '/assets/images/profile.png',
        profession: 'Founder of Marjan',
        location: 'Marjan',
        comment: 'Azim! I like him so much. He is kind guy always funny. But his good part is he is very serious when he works. I tell him to make me a mobile application. Guess what! Not only he make it but also he make it more better.',
    }
]

const Testimonials = () => {
    return (
        <div className="flex flex-col justify-between gap-[20px]">
            <div className="titles text-center font-bold font-monaSans">
                <h3 className="xl:text-[120px] lg:text-[100px] md:text-[70px] sm:text-[50px] text-[40px] ">TESTIMONIALS</h3>
                <p>REAL COMMENTS FROM CLIENTS AND COLLABORATORS WHO</p>
                <p>HAVE EXPERIENCED MY WORK FIRSTHAND</p>
            </div>

            <div className="cards grid lg:grid-cols-3 md:grid-cols-2  gap-[20px]">
                {
                    clientComments.map((comment, index) => (
                        <CommentCard key={index} name={comment.name} profile={comment.profile} profession={comment.profession} location={comment.location} comment={comment.comment}/>
                    ))
                }
            </div>

            <div className="hireMePart flex justify-center items-center">
                <Link href="https://www.freelancer.com/u/richazim" className="rounded-xl overflow-hidden w-[165px] h-[32px] relative">
                    <Image src="/assets/icons/hiring-logo.svg" alt='' width={165} height={32} className=''/>
                </Link>
            </div>
        </div>
    );
};

export default Testimonials;