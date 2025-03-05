import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div className="sm:px-[100px] px-0">
            <footer className="flex flex-row sm:justify-between sm:gap-0 gap-[70px] justify-center items-center uppercase font-bold md:text-[14px] text-[10px] text-black my-[30px]">
                <div className="break-words">copyright <span>2025</span></div>

                <div className="flex sm:flex-row flex-row items-center gap-[5px]">
                    <span>Developed by</span>
                    <Link href="https://github.com/richazim" target="_blank">
                        <span className="underline break-keep">Azim Saibou</span>
                    </Link></div>
            </footer>

            <div className="specialThanks">
                <div dangerouslySetInnerHTML={{__html: `<!-- Portfolio design inspired by Victor Williams Portfolio (https://victorwilliams.me) --> <!-- Huge thanks to Victor Williams for sharing is awesome portfolio design! 🙌 --> <!-- Thank you very much! -->`}} />
            </div>
        </div>
    );
};

export default Footer;
