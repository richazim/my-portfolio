import React from 'react';
import BlogCard from "@/components/BlogCard";

const threeBestBlogs = [
    {
        title: 'How to build a simple Autocomplete with React',
        thumbnail: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TSNEbagDG5izgV8GCcFYuQ.png',
        link: 'https://medium.com/@vickyvishal/how-to-build-a-simple-autocomplete-with-react-6d84240af18e',
        date: 'April 2024'
    },
    {
        title: 'How to use Laravel Queues',
        thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/1*S1nnzueODjx1TMXmtqOlzQ.jpeg',
        link: 'https://medium.com/@microDesignn/how-to-use-laravel-queues-step-by-step-tutorial-516174e164bb',
        date: 'march 2023'
    },
    {
        title: 'Mastering React Native FlatList',
        thumbnail: 'https://www.folio3.com/mobile/wp-content/uploads/2020/11/Flatlist-in-React-Native.png',
        link: 'https://medium.com/@prem__kumar/mastering-react-native-flatlist-a-comprehensive-guide-d39c4fdcbf84',
        date: 'December 2023'
    }
]

const BlogsSection = () => {
    return (
        <div className="">
            <div className="text-black">
                <h3 className="text-[100px] font-bold font-monaSans text-center ">BLOGS</h3>

                <div className="flex justify-center items-center">
                    <p className="uppercase w-[400px] text-center">
                        {/*I write mainly about Fullstack Web & Mobile development to simplify complex concepts and help developers improve their skills. */}
                        {/*From frontend frameworks like React and Next.js to backend optimizations, */}
                        I share practical insights for building powerful applications. Let’s learn and grow together! 🚀
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