import React, { useRef, useEffect } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

function Card(props) {
    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (

        <div className='flex text-[10rem] justify-between snap-start h-[100vh] align-middle'>
            <span ref={ref} className='h-[100vh]'>
                {props.name}
            </span>

            <motion.div className='w-64 h-64' style={{ y }}>
                {/* <spline-viewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global"></spline-viewer> */}

            </motion.div>
        </div>
    )
}

export default Card