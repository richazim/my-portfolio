import React from 'react';
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

const threeBestBlogs = [
    {
        title: 'How to create an ecommerce app',
        thumbnail: '/assets/images/profile.png',
        link: 'https://google.com',
        date: 'may 2024'
    },
    {
        title: 'How to create an ecommerce app',
        thumbnail: '/assets/images/profile.png',
        link: 'https://google.com',
        date: 'may 2024'
    },
    {
        title: 'How to create an ecommerce app',
        thumbnail: '/assets/images/profile.png',
        link: 'https://google.com',
        date: 'may 2024'
    }
]

const Blogs = () => {
    return (
        <div>
            <div>
                <h3 className="text-[100px] font-bold font-monaSans text-center">BLOGS</h3>

                <div className="flex justify-center items-center font-bold">
                    <p className="uppercase w-[400px] text-center">
                        I write about Fullstack Web & Mobile development to simplify complex concepts and help developers improve their skills. From frontend frameworks like React and Next.js to backend optimizations, I share practical insights for building powerful applications. Let’s learn and grow together! 🚀
                    </p>
                </div>
            </div>

            <div className='flex flex-row justify-between flex-wrap mt-[50px]'>
                {
                    threeBestBlogs.map((blog, index) => (
                        <div key={index}>
                            <BlogCard title={blog.title} thumbnail={blog.thumbnail} link={blog.link} date={blog.date} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;