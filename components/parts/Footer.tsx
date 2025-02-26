import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-row justify-between items-center uppercase font-bold md:text-[14px] text-[10px]">
                <div className="break-words">copyright <span>2025</span></div>

                <div className="flex sm:flex-row flex-col items-center gap-[10px]">
                    <span>Developed by</span>
                    <Link href="https://github.com/richazim" target="_blank">
                        <span className="underline break-keep">Azim Saibou</span>
                    </Link></div>
            </footer>

            <div className="specialThanks">
                <div dangerouslySetInnerHTML={{__html: `<!-- Portfolio design inspired by Victor Williams (https://victorwilliams.me) --> <!-- Huge thanks for sharing an awesome portfolio design! 🙌 --> <!-- Thank you very much! -->`}} />
            </div>
        </>
    );
};

export default Footer;
