import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

// export const revealTitleOne = (element: HTMLElement | HTMLElement[]) => {
//     const splitedStrings = SplitText.create(element, { type: "lines" });

//     gsap.from(splitedStrings.lines, {
//         y: 80,
//         opacity: 0,
//         autoAlpha: 0,
//         stagger: 0.05,
//         duration: 1,
//         ease: "power3.out",
//         delay: 6
//     });
// }


export const revealTitleTwo = (elOne: HTMLElement | null, elTwo: HTMLElement | null) => {

    if (!elOne || !elTwo) return;
  
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });
  
    tl.from(elOne, { y: -100, opacity: 0, delay: 6 })
      .from(elTwo, { y: 100, opacity: 0 }, '-=1');
  
    return tl;
};

export const revealTextScroll = (element: HTMLElement) => {
  if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
        skewY: 5,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Quand le top du texte touche 80% de la hauteur viewport
          toggleActions: "play none none none",
        },
      }
    );
};
