"use client";

import React, {useEffect, useState} from 'react';
import Song from "@/components/Song";
import useMeasure from "react-use-measure";
import {motion, animate, useMotionValue} from "framer-motion";
import { youtubeSongs } from '@/types/youtube';


const SongsRecommendationSection = ({songs} : {songs: youtubeSongs[]}) => {

    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = useState(FAST_DURATION);

    const [mustFinish, setMustFinish] = useState(false)
    const [reRender, setReRender] = useState(false)

    const [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const gapBetweenSongs = 20;
        const finalPosition = -width / 2 - gapBetweenSongs;
        let controls;

        if(mustFinish){
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setReRender(!reRender);
                }
            })

        }else{
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0
            })
        }

        return controls?.stop;
    }, [xTranslation, width, duration, reRender])

    return (
        <div className="flex flex-col justify-between w-[100vw] overflow-hidden relative h-[300px]">
            <div className="relative">
                <motion.section className="flex flex-row justify-between gap-[20px] items-center absolute top-0 left-0"
                                ref={ref}
                                style={{x: xTranslation}}
                                onHoverStart={() => {
                                    setMustFinish(true)
                                    setDuration(SLOW_DURATION)
                                }}
                                onHoverEnd={() => {
                                    setMustFinish(true)
                                    setDuration(FAST_DURATION)
                                }}
                >
                    {[...songs, ...songs].map((song, index: number) => (
                        <div key={index}>
                            <Song id={song.id} thumbnail={song.thumbnail} title={song.title}/>
                        </div>
                    ))}
                </motion.section>
            </div>

            <div className='mt-[10px] flex justify-center items-center text-[#1b79f5]'>
                <p className="text-center font-bold w-[400px] capitalize">
                    Voici quelques chansons que je recommande si vous cherchez de bons flows.
                </p>
            </div>
        </div>
    );
};

export default SongsRecommendationSection;