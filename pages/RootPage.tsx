"use client";
import React from "react";
import HeroSection from "@/sections/HeroSection";
import WorksSection from "@/sections/WorksSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import AboutSection from "@/sections/AboutSection";
import SongsRecommendationSection from "@/sections/SongsRecommendationSection";
import BlogsSection from "@/sections/BlogsSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import { youtubeSongs } from "@/types/youtube";



export default function RootPage({songs}: {songs: youtubeSongs[]}) {

  return (
    <main className="relative overflow-x-hidden bg-[#fff]">
        <HeroSection/>

        <div className="px-[20px] md:px-[100px] flex flex-col justify-between gap-[78px] mb-[78px]">
            <WorksSection/>

            <TestimonialsSection/>

            <AboutSection/>
        </div>

            <SongsRecommendationSection songs={songs}/>

        <div className="px-[20px] lg:px-[100px] md:px-[50px] flex flex-col justify-between gap-[78px] mt-[78px]">
            <BlogsSection/>

            <ContactSection/>
        </div>

        <div className="w-screen h-[2px] bg-[#333] mt-[50px]"></div>


        <FooterSection/>
    </main>
  );
}
