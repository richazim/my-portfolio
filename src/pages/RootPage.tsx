"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/sections/HeroSection";
import WorksSection from "@/sections/WorksSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import AboutSection from "@/sections/AboutSection";
import SongsRecommendationSection from "@/sections/SongsRecommendationSection";
import BlogsSection from "@/sections/BlogsSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import { getSongsRecommendation } from "@/actions/songRecommendation";
import { youtubeSongs } from "@/types/youtube";
import AnimatedCursor from "@/lib/animated_cursor";


export default function RootPage() {
  const [songs, setSongs] = useState<youtubeSongs[]>([]);

  useEffect(() => {
    const getYoutubeDatas = async () => {
      const data = await getSongsRecommendation();
      setSongs(data);
    }
    getYoutubeDatas();
  }, [])

  return (
    <main className="relative overflow-x-hidden bg-[#0E1016]">
        <AnimatedCursor 
          innerSize={15}
          outerSize={15}
          color='251, 191, 48'
          outerAlpha={0.2}
          innerScale={1.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
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
