import {ForwardedRef, useEffect, useState} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";


const StickyCursor = ({stickyElement} : {stickyElement: ForwardedRef<HTMLAnchorElement>}) => {
    const [isHovered, setIsHovered] = useState(false)
    // const cursorSize = isHovered ? 160 : 20;
    const [cursorSizeAlternative, setCursorSizeAlternative] = useState({width: 20, height: 20})

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
        // const center = {x: left + width / 2, y: top + height / 2};
        if(isHovered){
            // @ts-expect-error: On s'assurera que le ref existe bel et bien
            const {left, top, height, width} = stickyElement.current.getBoundingClientRect();
            // const distance = {x: clientX - center.x, y: clientY - center.y};
            const extraHeight = 10 * (height / width);
            const extraWidth = + 10 * (width / width)
            setCursorSizeAlternative({ width: width + extraWidth, height: height + extraHeight });
            mouse.x.set(left - extraWidth / 2);
            mouse.y.set(top - extraHeight / 2);
        }else{
            setCursorSizeAlternative({ width: 20, height: 20});
            console.log(cursorSizeAlternative)
            mouse.x.set(clientX - cursorSizeAlternative.width / 2);
            mouse.y.set(clientY - cursorSizeAlternative.height / 2);
        }
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
            stickyElement.current.removeEventListener('mouseleave', manageMouseOut);
        }
    }, [isHovered, cursorSizeAlternative]);

    return (
        <motion.div className={`absolute bg-white mix-blend-exclusion pointer-events-none ${isHovered? '' : 'rounded-full'}`} style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
        }} animate={{width: cursorSizeAlternative.width, height: cursorSizeAlternative.height}}>

        </motion.div>
    );
};

export default StickyCursor;