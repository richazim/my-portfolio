import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const revealCharacters = (element: HTMLElement) => {
    gsap.set(element, { opacity: 1 });

    const splitedCharacters = SplitText.create(element, { type: "chars" });

    gsap.from(splitedCharacters.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05
    });
}

export const revealCharctersOnScrollOne = (element: HTMLElement) => {
    // Diviser en caractères
  const splitedCharacters = SplitText.create(element, { type: "chars" });

  // Animation avec ScrollTrigger
  gsap.from(splitedCharacters.chars, {
    // y: 20,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 98%", // Début de l'animation quand le haut de l'élément atteint 80% de la hauteur du viewport
      toggleActions: "play none none none", // Joue une seule fois
      once: true, // Ne rejoue pas
    }
  });
}

export const revealCharctersOnScrollTwo = (element: HTMLElement) => { // À utiliser plus tard
    const split = new SplitText(element, { type: "lines" });

    gsap.set(element, {
        opacity: 1 
    });

    split.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            // markers: true, // sert bien à afficher un débogueur visuel (debugger) pour t’aider à comprendre quand et où l’animation est déclenchée
            scrub: 1,
            start: "top center",
            end: "bottom center"
          }
        });
    });
}