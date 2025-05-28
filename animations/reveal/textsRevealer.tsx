import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

export const revealStrings = (element: HTMLElement | HTMLElement[]) => {
    const splitedStrings = SplitText.create(element, { type: "lines" });

    gsap.from(splitedStrings.lines, {
        y: 80,
        opacity: 0,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: 6
    });
}