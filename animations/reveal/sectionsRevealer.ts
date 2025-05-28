import gsap from 'gsap';

export const revealSection = (el: HTMLElement, fromY: number, toY: number, delay: number) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: fromY },
    { opacity: 1, y: toY, delay: delay, duration: 1, ease: 'power3.out' }
  );
};