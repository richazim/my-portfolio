import { useEffect, RefObject } from "react";
import { revealCharctersOnScrollOne, revealCharctersOnScrollTwo } from "@/animations/text/revealCharacters";

export const useRevealCharactersOnScrollOne = (ref: RefObject<HTMLElement | null>) => { // à utiliser plus tard
  useEffect(() => {
    if (!ref.current) return;
    revealCharctersOnScrollOne(ref.current);
  }, [ref]);
};

export const useRevealCharactersOnScrollTwo = (ref: RefObject<HTMLElement | null>) => { 
    useEffect(() => {
      if (!ref.current) return;
      revealCharctersOnScrollTwo(ref.current);
    }, [ref]);
};