import {ForwardedRef, useEffect, useState} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";

const StickyCursor = ({stickyElement} : {stickyElement: ForwardedRef<HTMLAnchorElement>}) => {
    const [isHovered, setIsHovered] = useState(false)
    // const cursorSize = isHovered ? 160 : 80;
    const [cursorSizeAlternative, setCursorSizeAlternative] = useState({width: 40, height: 40})

    const mouse = {
        x: useMotionValue(50),
        y: useMotionValue(200)
    }

    const smoothOptions = {damping: 20, stiffness: 300, mass: 0.01};
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = (event: MouseEvent) => {
        // const target = event.target as HTMLElement;
        // const parent = target.parentElement;
        // const grandparent = parent?.parentElement;

        const {clientX, clientY} = event;
        // const center = {x: left + width / 2, y: top + height / 2};
        if(isHovered){
            // @ts-expect-error: On s'assurera que le ref existe bel et bien
            const {left, top, height, width} = stickyElement.current.getBoundingClientRect();
            // const distance = {x: clientX - center.x, y: clientY - center.y};
            const extraHeight = 20 * (height / width);
            const extraWidth = 20 * (height / width)
            setCursorSizeAlternative({ width: width + extraWidth, height: height + extraHeight });
            mouse.x.set(left - extraWidth / 2);
            mouse.y.set(top - extraHeight / 2);
        }else{
            setCursorSizeAlternative({ width: 40, height: 40});
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
        document.querySelector('#home').addEventListener('mousemove', (e: MouseEvent) => {
            manageMouseMove(e)
            if(window.scrollY > 0){
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        });

        // document.querySelector('') .... Pour implementer plus tard le sticky Cursor sur le menu de navigation egalement

        // @ts-expect-error: On s'assurera que le ref existe bel et bien
        stickyElement.current.addEventListener('mouseenter', manageMouseOver);

        // SPECIAL_ELEMENTS_FOR_CUSTOM_CURSOR.forEach((element) => {
        //     const htmlElement = document.querySelector(element.class);
        //     if(htmlElement){
        //         htmlElement.addEventListener('mouseenter', manageMouseOver);
        //     }
        // })

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
        <motion.div className={`absolute bg-[#ffc107] mix-blend-exclusion pointer-events-none ${isHovered? 'rounded-[7px]' : 'rounded-full'}`} style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
        }} animate={{width: cursorSizeAlternative.width, height: cursorSizeAlternative.height}}>

        </motion.div>
    );
};

export default StickyCursor;