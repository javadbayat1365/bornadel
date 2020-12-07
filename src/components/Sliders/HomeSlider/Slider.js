import React, { useState, useEffect, useRef } from 'react'
import { Button, fade } from '@material-ui/core'
import './Slider.css'
import banner1 from '../../../assets/images/Banner/banner1.jpg'
import banner2 from '../../../assets/images/Banner/banner2.jpg'
import banner3 from '../../../assets/images/Banner/banner3.jpg'
import banner4 from '../../../assets/images/Banner/banner4.jpg'

export default function Slider({ duration, dots, arrow, type, radious }) {
    const [seconds, setSeconds] = useState(0)

    const interval = useRef(null)
    useEffect(() => {
        startCounter()
    }, [])
    useEffect(() => {
        if (seconds > 3) {
            stopCounter()
            setSeconds(0)
            startCounter()
        }
        if (seconds < 0) {
            stopCounter()
            setSeconds(3)
            startCounter()
        }
    }, [seconds])


    const startCounter = () => {
        interval.current = setInterval(() => {
            setSeconds(prevState => prevState + 1)
        }, duration)
    }
    const stopCounter = () => clearInterval(interval.current)



    return (
        <div className="sliderContainer">
            {type === "fade" ?
                <>
                    <div className="sliderShow1"
                        style={{ animationName: seconds === 0 || seconds === 4 ? "fadeShow" : "fadeHidden", animationDuration: "0.3s", animationFillMode: "forwards", borderRadius: radious }} 
                        onMouseEnter={()=>{stopCounter()}}
                        onMouseLeave={()=>{startCounter()}}  >
                        <img src={banner1} style={{ width: "100%", height: "100%", borderRadius: radious }} />
                    </div>
                    <div className="sliderShow2"
                        style={{ backgroundSize: "contain", animationName: seconds === 1 ? "fadeShow" : "fadeHidden", animationDuration: "0.3s", animationFillMode: "forwards", borderRadius: radious }} 
                        onMouseEnter={()=>{stopCounter()}}
                        onMouseLeave={()=>{startCounter()}}  >
                        <img src={banner2} style={{ width: "100%", height: "100%", borderRadius: radious }} />
                    </div>
                    <div className="sliderShow3"
                        style={{ animationName: seconds === 2 ? "fadeShow" : "fadeHidden", animationDuration: "0.3s", animationFillMode: "forwards", borderRadius: radious }} 
                        onMouseEnter={()=>{stopCounter()}}
                        onMouseLeave={()=>{startCounter()}}  >
                        <img src={banner3} style={{ width: "100%", height: "100%", borderRadius: radious }} />
                    </div>
                    <div className="sliderShow4"
                        
                        style={{ animationName: seconds === 3 ? "fadeShow" : "fadeHidden", animationDuration: "0.3s", animationFillMode: "forwards", borderRadius: radious }} 
                        onMouseEnter={()=>{stopCounter()}}
                        onMouseLeave={()=>{startCounter()}}  >
                        <img src={banner4} style={{ width: "100%", height: "100%", borderRadius: radious }} />
                    </div>
                </>
                : type === "slide" ?
                    <>
                        <div className="sliderShow1" style={{ backgroundImage: `url(${banner1})`, animationName: seconds === 0 || seconds === 4 ? "slideShow" : "slideHidden", animationDuration: "2s", animationFillMode: "forwards", borderRadius: { radious } }} data-slide="1"></div>
                        <div className="sliderShow2" style={{ animationName: seconds === 1 ? "slideShow" : "slideHidden", animationDuration: "2s", animationFillMode: "forwards", borderRadius: radious }} data-slide="2"></div>
                        <div className="sliderShow3" style={{ animationName: seconds === 2 ? "slideShow" : "slideHidden", animationDuration: "2s", animationFillMode: "forwards", borderRadius: radious }} data-slide="3"></div>
                        <div className="sliderShow4" style={{ animationName: seconds === 3 ? "slideShow" : "slideHidden", animationDuration: "2s", animationFillMode: "forwards", borderRadius: radious }} data-slide="4"></div>
                    </>
                    : null}
            {arrow && type === "fade" ?
                <>
                    <div className="rightContainer" onClick={() => {
                        setSeconds(prev => prev - 1)
                        stopCounter()
                        startCounter()
                    }}>
                        <div></div>
                    </div>
                    <div className="leftContainer" onClick={() => {
                        setSeconds(prev => prev + 1)
                        stopCounter()
                        startCounter()
                    }}>
                        <div></div>
                    </div>
                </>
                : arrow && type === "slide" ?
                    <>
                        <div className="rightContainer" onClick={() => {
                            setSeconds(prev => prev + 1)
                            stopCounter()
                            startCounter()
                        }}>
                            {/* <ArrowForwardIosIcon /> */}
                        </div>
                        <div className="leftContainer" onClick={() => {
                            setSeconds(prev => prev - 1)
                            stopCounter()
                            startCounter()
                        }}>
                            {/* <ArrowBackIosIcon /> */}
                        </div>
                    </>
                    : null}
            {dots && type === "fade" ?
                <div className="dotsGroup">
                    <div className="dotsContainer">
                        <div onClick={() => {
                            setSeconds(0)
                            stopCounter()
                            startCounter()

                        }} className={`dot ${seconds === 0 || seconds === 4 ? "active" : ""}`}></div>
                        <div onClick={() => {
                            setSeconds(1)
                            stopCounter()
                            startCounter()

                        }} className={`dot ${seconds === 1 ? "active" : ""}`}></div>
                        <div onClick={() => {
                            setSeconds(2)
                            stopCounter()
                            startCounter()

                        }} className={`dot ${seconds === 2 ? "active" : ""}`}></div>
                        <div onClick={() => {
                            setSeconds(3)
                            stopCounter()
                            startCounter()

                        }} className={`dot ${seconds === 3 ? "active" : ""}`}></div>
                    </div>
                </div> : dots && type === "slide" ?
                    <div className="dotsGroup">
                        <div className="dotsContainer">
                            <div onClick={() => {
                                setSeconds(0)
                                stopCounter()
                                startCounter()

                            }} className={`dot ${seconds === 3 ? "active" : ""}`}></div>
                            <div onClick={() => {
                                setSeconds(1)
                                stopCounter()
                                startCounter()

                            }} className={`dot ${seconds === 2 ? "active" : ""}`}></div>
                            <div onClick={() => {
                                setSeconds(2)
                                stopCounter()
                                startCounter()

                            }} className={`dot ${seconds === 1 ? "active" : ""}`}></div>
                            <div onClick={() => {
                                setSeconds(3)
                                stopCounter()
                                startCounter()

                            }} className={`dot ${seconds === 0 || seconds === 4 ? "active" : ""}`}></div>
                        </div>
                    </div> :
                    null
            }
        </div>
    )
}