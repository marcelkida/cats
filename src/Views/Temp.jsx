import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { animate, motion } from 'framer-motion';

function Temp() {
  const slides = [
    {
      key: 1,
      title: 'Pig & Bees',
      color: '#77DAFF',
      text: '#000000',
      url: 'https://my.spline.design/untitled1-f1fea7ed4e552832d3ba0f2b45a47890/', 
      content: <a href='https://my.spline.design/untitled1-f1fea7ed4e552832d3ba0f2b45a47890/'><motion.div className='h-screen w-screen' whileHover={{scale: 1.2}}><spline-viewer url="https://prod.spline.design/p3ObgaNQEwH-05QP/scene.splinecode"></spline-viewer></motion.div></a>
    },
    {
      key: 2,
      title: 'Devil',
      color: '#2670F2',
      text: '#000000',
      url: 'https://my.spline.design/devil-b7b68e80d78e69adb824ea8b7dcce944/',
      content: <a href = 'https://my.spline.design/devil-b7b68e80d78e69adb824ea8b7dcce944/'><motion.div className='h-screen w-screen' whileHover={{scale: 1.2}}><spline-viewer url="https://prod.spline.design/rPC3SGtheQAKn4jI/scene.splinecode"></spline-viewer></motion.div></a>
    },
    {
      key: 3,
      title: 'Sheep',
      color: '#F8E7D8',
      text: '#000000',
      url: 'https://my.spline.design/sheep-b11cff944f25e73090c6c3a958c397c2/',
      content: <a href='https://my.spline.design/sheep-b11cff944f25e73090c6c3a958c397c2/'><motion.div className='h-screen w-screen' whileHover={{scale: 1.2}}><spline-viewer url="https://prod.spline.design/h9u0wxXHZtD4B3VM/scene.splinecode"></spline-viewer></motion.div></a>
    },
    {
      key: 4,
      title: 'Weather Forecast',
      color: '#1A122B',
      text: '#FFFFFF',
      url: 'https://my.spline.design/cloudyfinal-b3b64eb1544b61dc96306da433cf8acc/',
      content: <a href='https://my.spline.design/cloudyfinal-b3b64eb1544b61dc96306da433cf8acc/'><motion.div className='h-screen w-screen' whileHover={{scale: 1.2}}><spline-viewer url="https://prod.spline.design/EOZecnAWrr53iene/scene.splinecode" ></spline-viewer></motion.div></a>
    },
    {
      key: 5,
      title: 'Plant',
      color: '#FFED59',
      text: '#000000',
      url: 'https://my.spline.design/plant-7556fb75de84f0e59896167d7f69024a/',
      content: <a href='https://my.spline.design/plant-7556fb75de84f0e59896167d7f69024a/'><motion.div className='h-screen w-screen' whileHover={{scale: 1.2}}><spline-viewer url="https://prod.spline.design/1oIHjdbFpnvImg7y/scene.splinecode"></spline-viewer></motion.div></a>
    },
    {
      key: 6,
      title: 'Bubblegum',
      color: '#1B1B1B',
      text: '#FFFFFF',
      url: 'https://my.spline.design/girlgumbubblecopy-a1813d1f4091a7f75578ac4bb0696f40/',
      content: <a href='https://my.spline.design/girlgumbubblecopy-a1813d1f4091a7f75578ac4bb0696f40/'><motion.div className='h-screen w-screen' whileHover={{scale: 1.2}}><spline-viewer url="https://prod.spline.design/Rj-iysNVXc6KY1Iu/scene.splinecode"></spline-viewer></motion.div></a>
    },
    {
      key: 7,
      title: 'Baby Spark',
      color: '#1BDFFF',
      text: '#000000',
      url: 'https://my.spline.design/sharkplatformer-c005246ad8f5fdf2ee76fa3b9208c6f9/',
      content: <a href='https://my.spline.design/sharkplatformer-c005246ad8f5fdf2ee76fa3b9208c6f9/'><motion.div className='h-screen w-screen' whileHover={{scale: 1.2}}><spline-viewer url="https://prod.spline.design/EaBPP0JYCgLkPDHf/scene.splinecode"></spline-viewer></motion.div></a>
    },

    

  ];
  const [currentIndex, setcurrentIndex] = useState(0);
  const [currTitle, setCurrTitle] = useState(slides[0].title);
  const [currColor, setCurrColor] = useState("#FFFFFF")
  const [currColor2, setCurrColor2] = useState("#FFFFFF")
  const [currText, setCurrText] = useState("#000000")
  useEffect(() => {
    setCurrTitle(slides[currentIndex].title);
    setCurrColor(slides[currentIndex].color);
    setCurrText(slides[currentIndex].text);
  }, [currentIndex]);

  const movePrev = () => {
    if (currentIndex > 0) {
      setcurrentIndex((prevState) => prevState - 1);
    } else {
      setcurrentIndex(length);
    }
  };

  const moveNext = () => {
    if (length != currentIndex) {
      setcurrentIndex((nextState) => nextState + 1);
    } else {
      setcurrentIndex(0);
    }
  };
  const [length, setLength] = useState(slides.length - 1);

  
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center font-devant text-[14rem]'>
      <div className="absolute w-1/3 h-full r-0 translate-x-full z-10 cursor-pointer" onClick={moveNext}></div>
      <div className="absolute w-1/3 h-full r-0 -translate-x-full z-10 cursor-pointer " onClick={movePrev}></div>
      <motion.div onAnimationComplete={() => setCurrColor2(currColor)} key={currentIndex} id='swipe' className='absolute r-0 w-full h-full -z-10' style={{background: currColor}} initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{ ease: [0.37, 0.89, .85, 1], duration: .5 }}></motion.div>
      <div className='absolute r-0 w-full h-full -z-20' style={{background: currColor2}}></div>
      <Carousel slides={slides}
      goToSlide={currentIndex}
      offsetRadius={5}
      animationConfig={{}}/>
      <div className='absolute uppercase' style={{color: currText}}>{currTitle}</div>
    </div>
  )
}

export default Temp