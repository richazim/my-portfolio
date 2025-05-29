import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export const revealCharacters = (element: HTMLElement) => {
    gsap.set(element, { opacity: 1 });

    const splitedCharacters = SplitText.create(element, { type: "chars" });

    gsap.from(splitedCharacters.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05
    });
}