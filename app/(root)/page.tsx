import Home from "@/parts/Home";
import Works from "@/parts/Works";
import Testimonials from "@/parts/Testimonials";
import About from "@/parts/About";
import SongsRecommendation from "@/parts/SongsRecommendation";
import Blogs from "@/parts/Blogs";
import Contact from "@/parts/Contact";
import Footer from "@/parts/Footer";
import React from "react";
import {getSongsRecommendation} from "@/actions/songRecommendation";

const SONGS_RECOMMENDATIONS = await getSongsRecommendation();

export default async function Portfolio() {

  return (
    <main className="relative overflow-x-hidden bg-[#fff]">
        <Home/>

        <div className="px-[20px] md:px-[100px] flex flex-col justify-between gap-[78px] mb-[78px]">
            <Works/>

            <Testimonials/>

            <About/>
        </div>

            <SongsRecommendation songs={SONGS_RECOMMENDATIONS}/>

        <div className="px-[20px] lg:px-[100px] md:px-[50px] flex flex-col justify-between gap-[78px] mt-[78px]">
            <Blogs/>

            <Contact/>
        </div>

        <div className="w-screen h-[2px] bg-[#333] mt-[50px]"></div>


        <Footer/>
    </main>
  );
}
