import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="flex flex-row justify-between items-center uppercase font-bold">
                <div>copyright <span>2025</span></div>

                <div>Developed by <span className="underline">Azim Saibou</span></div>
            </footer>

            <div className="specialThanks">
                <div dangerouslySetInnerHTML={{__html: `<!-- Portfolio design inspired by Victor Williams (https://victorwilliams.me) --> <!-- Huge thanks for sharing an awesome portfolio design! 🙌 --> <!-- Thank you very much! -->`}} />
            </div>
        </>
    );
};

export default Footer;
