"use client";
import React from 'react';
import Link from "next/link";

const FooterSection = () => {
    return (
        <div className="sm:px-[100px] px-0 text-[#e4ded7]">
            <footer className="flex flex-row sm:justify-between sm:gap-0 gap-[70px] justify-center items-center uppercase font-bold md:text-[14px] text-[10px] my-[30px]">
                <div className="break-words">copyright <span>2025</span></div>

                <div className="flex sm:flex-row flex-row items-center gap-[5px]">
                    <span>Entièrement Développé par</span>
                    <Link href="https://www.linkedin.com/in/azimsaibou/" target="_blank">
                        <span className="underline break-keep">Azim Saibou</span>
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default FooterSection;
