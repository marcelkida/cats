import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplineForce from '../Components/SplineForce'
import cabin from '../Assets/cabin.webm'
import island from '../Assets/island.webm'
import keyboard from '../Assets/keyboard.webm'


function Test() {
    const DUMMY = [
        {
            id: 0,
            text: "ISLAND",
            url: 'https://prod.spline.design/gs6G1FwtZdlgfq6w/scene.splinecode',
            preview: island,
            color: "hover:text-blue-300",
            bg: "bg-blue-300"
        },
        {
            id: 1,
            text: "CABIN",
            url: 'https://prod.spline.design/mG4VqqKk4gKe7zRc/scene.splinecode',
            preview: cabin,
            color: "hover:text-red-300",
            bg: "bg-red-300"
        },
        {
            id: 2,
            text: "KEYBOARD",
            url: "",
            preview: keyboard,
            color: "hover:text-yellow-300"
        },
        {
            id: 3,
            text: "DOG",
            url: "",
            color: "hover:text-slate-300"
        },
        {
            id: 4,
            text: "KITTEN",
            url: ""
        },
    ]
    const [currUrl, setCurrUrl] = useState(island)
    const [viewer, setViewer] = useState(true)
    const [onAnimComp, setOnAnimComp] = useState(false)
    const [currSpline, setCurrSpline] = useState("")
    const [currColor, setCurrColor] = useState("")
    return (
        <div className>
            <AnimatePresence onExitComplete={() => setOnAnimComp(true)}>
                {viewer ?
                    <motion.div
                        initial={{ y: -800 }}
                        animate={{ y: 0 }}
                        exit={{ y: -800 }}
                        key="cat"
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.5 }}
                        className='w-screen h-screen absolute t-0 left-5 text-6xl font-devant'>
                        CATS

                    </motion.div>
                    :
                    <></>
                }
                {viewer ?
                    <motion.video
                        initial={{ y: -800 }}
                        animate={{ y: 0 }}
                        exit={{ y: -800 }}
                        key="vid"
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.5 }}
                        className='w-screen h-screen absolute t-0'
                        src={currUrl} autoPlay="true" loop="true" muted>

                    </motion.video>
                    :
                    onAnimComp && <motion.div
                        key="spline"
                        initial={{ y: -1000 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -1000 }}
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6, delay: 1 }}

                        className='w-screen h-screen absolute t-0'>
                        <spline-viewer url="https://prod.spline.design/gs6G1FwtZdlgfq6w/scene.splinecode"
                            loading="eager" ></spline-viewer>
                    </motion.div>
                }
                {viewer ?

                    <motion.div initial={{ y: 500 }}
                        animate={{ y: 0 }}
                        exit={{ y: 500 }}
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.5 }}
                        key="ha"
                        className='font-devant text-[13rem] absolute bottom-[-6rem] left-0 align-bottom align-text-bottom flex justify-center w-screen'>
                        {DUMMY.map((data) => (
                            <>
                                <motion.div className={`flex ${data.color}`} onMouseEnter={() => setCurrUrl(data.preview)} onClick={() => {
                                    setCurrSpline(data.url)
                                    setViewer(false)
                                    setCurrColor(data.bg)

                                }}>
                                    {[...data.text].map((char) => (
                                        <motion.div className={`${data.color}`} whileHover={{ scaleY: 1.2 }} style={{ transformOrigin: "center 20rem" }} >{char}</motion.div>
                                    ))}
                                </motion.div>

                                <>
                                    {data.id != 4 &&
                                        <>&nbsp;&nbsp;&nbsp;</>
                                    }
                                </>
                            </>
                        ))}
                    </motion.div>
                    :
                    <motion.div>

                    </motion.div>
                }
                {onAnimComp &&
                    <motion.div
                        key="spline"
                        initial={{ height: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit={{}}
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6, delay: .5}}
                        className={`h-screen w-screen absolute bottom-0 -z-50 ${currColor}`}>
                    </motion.div>}

            </AnimatePresence>
        </div>
    )
}

export default Test