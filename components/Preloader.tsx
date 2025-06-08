"use client";
import { cn } from "@/lib/utils/cn";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const timeline = gsap.timeline();

const Preloader = () => {
  const preloaderContainerRef = useRef(null);
  const titlesContainerRef = useRef(null);
  const titleOneRef = useRef(null);
  const titleTwoRef = useRef(null);
  const titleThreeRef = useRef(null);

  useEffect(() => {
    timeline
      .to(titlesContainerRef.current, {
        // Rendre le conteneur des titres visible
        opacity: 1,
        ease: "Power3.easeOut",
        duration: 0,
      })
      .from([titleOneRef.current, titleTwoRef.current, titleThreeRef.current], {
        // Faire entrer les titre un a un
        y: 90,
        stagger: 0.4,
        skewY: 10, // Penché les titre à l'angle de 10° dans le sens horaire
        duration: 1.5,
        ease: "Power3.easeOut",
        delay: 1,
      })
      .to([titleOneRef.current, titleTwoRef.current, titleThreeRef.current], {
        // Faire sortir les titre un a un
        y: 110,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
        duration: 1,
      })
      .to("body", {
        // Rendr le composant body scrollable
        css: {
          overflowY: "scroll", // le composant body doit etre initialement en overflow hidden
        },
        ease: "Power3.inOut",
        duration: 0.01,
      })
      .to(
        // Raccourcir la hauteur du preloader
        preloaderContainerRef.current,
        {
          height: "0vh",
          ease: "Power3.easeOut",
          duration: 1.5,
        },
        "-=0.5" // Fait décaler cette animation de -0.5 seconde de la fin de l'animation précédente
      )
      .to(preloaderContainerRef.current, {
        // effacer le preloader du dom
        css: {
          display: "none",
        },
        duration: 0,
      });
  }, []);

  return (
    <div
      ref={preloaderContainerRef}
      className="fixed h-screen w-screen left-0 bottom-0 z-20 bg-[#0e1016] flex justify-center items-center"
    >
      <div
        ref={titlesContainerRef}
        className={cn(
            "h-[100px] overflow-hidden text-[#e4ded7] font-extrabold flex items-center justify-center gap-[5px] opacity-0",
            "text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        )}
      >
        <span id="text1" ref={titleOneRef}>
          Programmeur,
        </span>

        <span id="text2" ref={titleTwoRef}>
          Développeur,
        </span>

        <span id="text3" ref={titleThreeRef}>
          Apprenant.
        </span>
      </div>
    </div>
  );
};

export default Preloader;
