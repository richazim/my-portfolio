import React from 'react';
import CommentCard from "@/components/CommentCard";
import Image from "next/image";
import Link from "next/link";

const clientComments = [
    {
        "name": "Alice Dupont",
        "profile": "/assets/images/testimonials/alice.png",
        "profession": "CEO of TechWave",
        "location": "Paris, France",
        "comment": "Working with Azim was an absolute pleasure. His dedication and expertise turned our vision into reality. Highly recommended!"
    },
    {
        "name": "John Smith",
        "profile": "/assets/images/testimonials/bertrand.png",
        "profession": "Lead Developer at CodeCrafters",
        "location": "San Francisco, USA",
        "comment": "Azim is a talented developer with a great sense of problem-solving. His work exceeded our expectations in every way."
    },
    {
        "name": "Sofia Martínez",
        "profile": "/assets/images/testimonials/emmanuel.png",
        "profession": "Founder of InnovateX",
        "location": "Madrid, Spain",
        "comment": "I needed a robust web solution, and Azim delivered beyond what I imagined. His work is clean, efficient, and innovative."
    },
    {
        "name": "Liam O’Connor",
        "profile": "/assets/images/testimonials/john.png",
        "profession": "CTO at FutureSoft",
        "location": "Dublin, Ireland",
        "comment": "Azim’s technical skills are impressive, but what stands out the most is his ability to understand client needs and translate them into exceptional work."
    },
    {
        "name": "Bertrand Tanaka",
        "profile": "/assets/images/testimonials/liam.png",
        "profession": "UX Designer at Visionary Labs",
        "location": "Tokyo, Japan",
        "comment": "Azim’s ability to seamlessly integrate functionality with a stunning user experience is remarkable. A true professional!"
    },
    {
        "name": "Dung Bu",
        "profile": "/assets/images/testimonials/dung.png",
        "profession": "Entrepreneur",
        "location": "Dakar, Senegal",
        "comment": "I entrusted Azim with my startup’s website, and he delivered a masterpiece. His attention to detail and responsiveness are unmatched."
    }
]


const TestimonialsSection = () => {
    return (
        <div className="flex flex-col justify-between gap-[20px]">
            <div className="titles text-center font-bold font-monaSans text-black">
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
                <Link href="https://www.freelancer.com/u/richazim" className="rounded-xl overflow-hidden w-[165px] h-[32px] relative shadow-[0_0_39px_7px_rgba(0,0,0,0.38)]" target="_blank">
                    <Image src="/assets/icons/hiring-logo.svg" alt='' width={165} height={36} className=''/>
                </Link>
            </div>
        </div>
    );
};

export default TestimonialsSection;