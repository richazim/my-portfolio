import {ForwardedRef, useEffect, useState} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";


const StickyCursor = ({stickyElement} : {stickyElement: ForwardedRef<HTMLAnchorElement>}) => {
    const [isHovered, setIsHovered] = useState(false)
    const cursorSize = isHovered ? 160 : 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = {damping: 20, stiffness: 300, mass: 0.01};
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = (event: MouseEvent) => {
        if(window.scrollY > 0){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const {clientX, clientY} = event;
        // @ts-expect-error: On s'assurera que le ref existe bel et bien
        const {left, top, height, width} = stickyElement.current.getBoundingClientRect();
        const center = {x: left + width / 2, y: top + height / 2};
        if(isHovered){
            // const distance = {x: clientX - center.x, y: clientY - center.y};
            mouse.x.set((center.x - cursorSize / 2));
            mouse.y.set((center.y - cursorSize / 2));
        }else{
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        }
        console.log(isHovered)
    }

    const manageMouseOver = () => {
        setIsHovered(true)
    }
    const manageMouseOut = () => {
        setIsHovered(false);
    }

    useEffect(() => {
        // @ts-expect-error: On s'assurera que la section #home existe bel et bien
        document.querySelector('#home').addEventListener('mousemove', manageMouseMove);

        // @ts-expect-error: On s'assurera que le ref existe bel et bien
        stickyElement.current.addEventListener('mouseenter', manageMouseOver);

        // @ts-expect-error: On s'assurera que le ref existe bel et bien
        stickyElement.current.addEventListener('mouseleave', manageMouseOut);

        return () => {
            // @ts-expect-error: On s'assurera que la section #home existe bel et bien
            document.querySelector('#home').removeEventListener('mousemove', manageMouseMove);
            // @ts-expect-error: On s'assurera que le ref existe bel et bien
            stickyElement.current.removeEventListener('mouseenter', manageMouseOver);
            // @ts-expect-error: On s'assurera que le ref existe bel et bien
            stickyElement.current.removeEventListener('mouseleave', manageMouseOut);
        }
    }, [isHovered]);

    return (
        <motion.div className="absolute bg-white rounded-full mix-blend-exclusion" style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
        }} animate={{width: cursorSize, height: cursorSize}}>

        </motion.div>
    );
};

export default StickyCursor;