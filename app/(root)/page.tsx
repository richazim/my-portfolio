import Home from "@/components/parts/Home";
import Works from "@/components/parts/Works";
import Testimonials from "@/components/parts/Testimonials";
import About from "@/components/parts/About";
import SongsRecommendation from "@/components/parts/SongsRecommendation";
import Blogs from "@/components/parts/Blogs";
import Contact from "@/components/parts/Contact";
import Footer from "@/components/parts/Footer";
import React from "react";

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error(res.statusText)
    await new Promise(resolve => setTimeout(resolve, 3000));
    const users = await res.json()
    return users
}

export default async function Portfolio() {
    const usersFetchedDataToForceTheLoadingUIToShowUp = await getUsers();
    console.log(usersFetchedDataToForceTheLoadingUIToShowUp)

  return (
    <main className="relative overflow-x-hidden">
        <Home/>

        <div className="px-[20px] md:px-[100px] flex flex-col justify-between gap-[78px] mb-[78px]">
            <Works/>

            <Testimonials/>

            <About/>
        </div>

            <SongsRecommendation/>

        <div className="px-[20px] xl:px-[100px] flex flex-col justify-between gap-[78px] mt-[78px]">
            <Blogs/>

            <Contact/>
        </div>

        <div className="w-screen h-[2px] bg-[#333] my-[50px]"></div>

        <div className="px-[100px]">
            <Footer/>
        </div>
    </main>
  );
}
