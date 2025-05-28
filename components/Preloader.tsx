"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react"


const timeline = gsap.timeline();


const Preloader = () => {
    const preloaderRef = useRef(null);
    const textsContainerRef = useRef(null);

    useEffect(() => {
        timeline
            .to(textsContainerRef.current, { // Rendre le conteneur des titres visible
                opacity: 1,
                ease: "Power3.easeOut",
                duration: 0
            })
            .from(["#text1", "#text2", "#text3"], { // Faire entrer les titre un a un
                y: 80,
                stagger: 0.4,
                skewY: 10,
                duration: 1.5,
                ease: "Power3.easeOut",
                delay: 1
            })
            .to(["#text1", "#text2", "#text3"], { // Faire sortir les titre un a un
                y: 90,
                skewY: -20,
                stagger: 0.2,
                ease: "Power3.easeOut",
                duration: 1
            })
            .to('body', { // Rendr le composant body scrollable
                css: {
                    overflowY: "scroll" // le composant body doit etre initialement en overflow hidden
                },
                ease: "Power3.inOut",
                duration: 0.01
            })
            .to( // Raccourcir la hauteur du preloader
                preloaderRef.current,
                {
                    height: "0vh",
                    ease: "Power3.easeOut",
                    duration: 1.5
                },
                "-=0.5"
            )
            .to(preloaderRef.current, { // effacer le preloader du dom
                css:{
                    display: "none"
                },
                duration: 0
            })
            
    }, []);

    return (
        <div ref={preloaderRef} className="fixed h-screen w-screen left-0 bottom-0 z-10 bg-[#0e1016] flex justify-center items-center">


            <div ref={textsContainerRef} className="h-[100px] overflow-hidden text-[30px] text-[#e4ded7] font-extrabold flex items-center justify-center gap-[5px] opacity-0">

                <span id="text1">Programmer,</span>

                <span id="text2">Developer,</span>

                <span id="text3">Designer.</span>

            </div>


        </div>
    )
}

export default Preloader;