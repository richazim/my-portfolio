"use client";
import React, { useRef } from 'react';
import BlogCard from "@/components/BlogCard";
import { threeBestBlogs } from '@/data/blogs';
import { useRevealCharactersOnScrollOne } from '@/hooks/useRevealCharactersScroll';
import { useRevealTextOnScroll } from '@/hooks/useRevealTextScroll';

const BlogsSection = () => {
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    
    useRevealTextOnScroll(titleRef);
    useRevealCharactersOnScrollOne(paragraphRef);

    return (
        <div className="">
            <div className="text-[#e4ded7]">
                <h3 ref={titleRef} className="text-[100px] font-bold font-monaSans text-center">BLOGS</h3>

                <div className="flex justify-center items-center">
                    <p ref={paragraphRef} className="uppercase w-[400px] text-center">
                        Je partage des idées pratiques pour créer des applications performantes. Apprenons et grandissons ensemble !
                    </p>
                </div>
            </div>

            <div className='mt-[35px] grid md:grid-cols-3 sm:grid-cols-2 gap-4' >
                {
                    threeBestBlogs.map((blog, index) => (
                        <BlogCard key={index} title={blog.title} thumbnail={blog.thumbnail} link={blog.link} date={blog.date} />
                    ))
                }
            </div>
        </div>
    );
};

export default BlogsSection;