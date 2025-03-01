import Home from "@/components/parts/Home";
import Works from "@/components/parts/Works";
import Testimonials from "@/components/parts/Testimonials";
import About from "@/components/parts/About";
import SongsRecommendation from "@/components/parts/SongsRecommendation";
import Blogs from "@/components/parts/Blogs";
import Contact from "@/components/parts/Contact";
import Footer from "@/components/parts/Footer";
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
