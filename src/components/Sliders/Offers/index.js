import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import CoursesComponent from '../../CoursesComponent/CoursesComponent'
import { fetchPost } from '../../../config/Utils'
import Apis from '../../../constants/Api'


export default function Index() {
    const [autoplay, setAutoplay] = useState(false)

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        rtl: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3800
    };
    const [coursesData, setCoursesData] = useState([])
    useEffect(() => {
        fetchPost(Apis.GET_GetAllSpecialOfferHomePage).then(({ responseJSON, status }) => {
            setCoursesData(responseJSON.data);
            setAutoplay(true)
        })
    }, [])
    return (
        <Grid container >
            <span className="linearUnderOffer" style={{ animation: autoplay ? "LinearGradienton 3890ms infinite 0.5s" : "LinearGradientoff 4100ms infinite" }} ></span>
            <div style={{ width: 200, margin: "auto" }}>
                <Slider  {...settings} >
                    {coursesData && coursesData.length > 0 ? coursesData.map((data, index) => {
                        return (
                            <div onMouseEnter={() => setAutoplay(false)}
                                onMouseLeave={() => setAutoplay(true)}
                                className="OfferContainer"
                                key={index} >
                                <CoursesComponent
                                    data={data}
                                    id={data.classRoom_ID}
                                    teacherName={data.teacher_Name + ' ' + data.teacher_LastName}
                                    title={data.classRoom_Subject}
                                    date={data.classRoom_DateTime}
                                    price={data.classRoom_Price}
                                    photoIconLink={Apis.SHOWIMAGE + data.educationSubject_IconeLink}
                                    LastPrice={data.last_Price}
                                    Discoun={data.classRoom_Discount}
                                    minWidth={166}
                                    maxWidth={166} 
                                    dir={"ltr"}
                                    deadLine={data.active}
                                    teacherLink={Apis.SHOWIMAGE + data.teacher_PhotoLink}
                                    educationSubject={data.educationSubject_Name} />
                            </div>
                        )
                    }) : null}
                </Slider>
            </div>
        </Grid>
    );
}
