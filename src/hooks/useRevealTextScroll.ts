import { useEffect, RefObject } from "react";
import { revealTextScroll } from "@/animations/text/revealText";

export const useRevealTextOnScroll = (ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!ref.current) return;
    revealTextScroll(ref.current);
  }, [ref]);
};
