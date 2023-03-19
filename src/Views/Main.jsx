import React from 'react'
import Card from '../Components/Card'

function Main() {
    return (
        <div>
            <div classname="fixed h-screen w-screen" style={{position: "fixed", width: "100vw", height: "100vh", zIndex: -100}}>
                <spline-viewer url="https://prod.spline.design/HWpRntGHJsMEZi8Y/scene.splinecode"></spline-viewer>
            </div>
            <Card name="cat"/>
            <Card name="dog"/>
            <Card name="thing"/>
            <Card name="fish"/>
            <Card name="kitten"/>
        </div>
    )
}

export default Main