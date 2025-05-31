"use client";
import React, { useRef } from 'react';
import CommentCard from "@/components/CommentCard";
import Image from "next/image";
import Link from "next/link";
import { clientComments } from '@/data/testimonies';
import { useRevealCharactersOnScrollOne } from '@/hooks/useRevealCharactersScroll';

const TestimonialsSection = () => {
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);

    useRevealCharactersOnScrollOne(titleRef);
    useRevealCharactersOnScrollOne(paragraphRef);

    return (
        <div className="flex flex-col justify-between gap-[20px]">
            <div className="titles text-center font-bold">
                <h3 ref={titleRef} className="xl:text-[120px] lg:text-[100px] md:text-[70px] sm:text-[50px] text-[40px] ">TÉMOIGNAGES</h3>
                <div ref={paragraphRef}>
                    <p>COMMENTAIRES AUTHENTIQUES DE CLIENTS ET COLLABORATEURS QUI</p>
                    <p>ONT EXPÉRIMENTÉ MON TRAVAIL DE PREMIÈRE MAIN</p>
                </div>
            </div>

            <div className="cards grid lg:grid-cols-3 md:grid-cols-2  gap-[20px]">
                {
                    clientComments.map((comment, index) => (
                        <CommentCard key={index} name={comment.name} profile={comment.profile} profession={comment.profession} location={comment.location} comment={comment.comment}/>
                    ))
                }
            </div>

            <div className="hireMePart flex justify-center items-center">
                <Link href="https://www.freelancer.com/u/richazim" className="rounded-xl overflow-hidden w-[165px] h-[32px] relative shadow-[0_0_39px_7px_rgba(0,0,0,0.38)]" target="_blank">
                    <Image src="/assets/icons/hiring-logo.svg" alt='' width={165} height={36} className=''/>
                </Link>
            </div>
        </div>
    );
};

export default TestimonialsSection;