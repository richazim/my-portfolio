"use client"
import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {truncateText} from "@/utils/truncateText";
import { SongProps } from "@/types/songs";

const Song = ({id, thumbnail, title}: SongProps) => {
    const [showOverlay, setShowOverlay] = useState(false)
    return (
        <motion.div className="relative flex items-center justify-center"
            onHoverStart={() => setShowOverlay(true)}
                    onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
                <div>
                    <Link href={`https://youtube.com/watch?v=${id}`} target="_blank" className="relative h-[190px] w-[350px] flex justify-center items-center overflow-hidden">
                        <Image src={thumbnail} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: "cover"}} className=""/>
                    </Link>
                    {
                        showOverlay && (
                            <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
                                        initial={{ opacity: 0 }}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                            >
                                <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"/>
                                <motion.div className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center ga-[0.5ch] hover:opacity-75"
                                            initial={{y: 10}}
                                            animate={{y: 0}}
                                            exit={{y: 10}}
                                >
                                    <Link href={`https://youtube.com/watch?v=${id}`} target="_blank"><span>{truncateText(title, 11)}</span></Link>
                                </motion.div>
                            </motion.div>
                        )
                    }
                </div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Song;