import gsap from 'gsap';

export const revealBoxOne = (el: HTMLElement | null, fromVars: gsap.TweenVars, toVars: gsap.TweenVars) => {
  gsap.fromTo(
    el,
    fromVars,
    { ease: 'power3.out', ...toVars }
  );
};
