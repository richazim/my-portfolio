import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

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