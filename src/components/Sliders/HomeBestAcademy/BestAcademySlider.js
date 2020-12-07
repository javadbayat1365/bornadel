import React, { useRef, useContext } from 'react'
import './BestAcademySlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Typography } from '@material-ui/core';
import { HomePageContext } from '../../../contexts/HomePageContext'
import Apis from '../../../constants/Api';
import Api from '../../../constants/Api';

export default function BestAcademySlider() {
    let { bestAcademy } = useContext(HomePageContext)
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        // rtl: true,
        arrows: false,
        infinite: false
    };
    let SliderRef = useRef()
    return (
        <Grid container alignItems="center" >
            <div className="ArrowNext" onClick={() => {
                SliderRef.current.slickNext()
            }}></div>
            <div style={{
                width: window.innerWidth > 1250 ? 800 : window.innerWidth > 1200 && window.innerWidth < 1250 ? 700 :
                window.innerWidth > 1099 && window.innerWidth < 1200 ? 650 :
                window.innerWidth > 1020 && window.innerWidth < 1100 ? 550 : 550}} 
                className="sliderBoxContainer">
                <Slider ref={SliderRef}  {...settings} >
                    {
                        bestAcademy && bestAcademy.length > 0 ? bestAcademy.map((item, index) => {
                            return (
                                <div className="BestaAcademyLogoContainer" key={index}>
                                    <img src={Apis.SHOWIMAGE + item.academy_PhotoLink} className="BestaAcademyLogo"></img>
                                    <Typography className="BestAcademyText">{item.academy_Name}</Typography>
                                </div>
                            )
                        }) : null
                    }
                </Slider>
            </div>
            <div className="ArrowPrev" onClick={() => {
                SliderRef.current.slickPrev()
            }}></div>
        </Grid>
    )
}
