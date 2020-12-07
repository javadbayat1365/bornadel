import React, { useEffect, useState, useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import Apis from '../../constants/Api'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import CoursesComponent from '../../components/CoursesComponent/CoursesComponent'

export default function SimilarItem() {
    let { recentView } = useContext(CourseDetailContext)
    const classes = useStyles();
    const [sliderWidth, setSliderWidth] = useState(0)
    const count = window.innerWidth > 1300 ? 7 : window.innerWidth > 1220 ? 6 :
        window.innerWidth > 960 ? 5 : window.innerWidth > 800 ? 4 : 3
    const [trs, setTrs] = useState(0)


    useEffect(() => {
        let SliderContainer = document.getElementById('SliderContainer')
        setSliderWidth(SliderContainer.offsetWidth);
    }, [])


    let ChangeTRS = (condition) => {
        if (condition === 1) {
            if (trs > 5) {
                setTrs(8)
                return
            }
            setTrs((prev) => setTrs(prev + count))
        }
        if (condition === -1) {
            if (trs < 1) {
                setTrs(0)
                return
            }
            setTrs((prev) => setTrs(prev - count))
        }
    }
    return (
        <Grid container className={classes.SimilarItemContainer}>
            <Grid container>
                <Typography className={classes.SimilarItemHeader}>موارد مشابه</Typography>
            </Grid>
            <Grid container style={{ width: "100%" }} id="SliderContainer" >
                <Grid container item style={{ overflow: "hidden" }}>
                    <Grid item container className={classes.ReceneViewSlider} wrap="nowrap"
                        style={{ transform: `translateX(${trs * (Math.ceil(sliderWidth / count))}px)`, transition: "all 2s" }}>
                        {
                            recentView && recentView.length > 0 ? recentView.map((data, index) => {
                                return (
                                    <Grid container item justify="center" key={index} className={classes.sliderItem}
                                        style={{ minWidth: Math.ceil(Math.ceil(sliderWidth) / count) }} >
                                        <CoursesComponent
                                            data={data}
                                            id={data.classRoom_ID}
                                            teacherName={data.teacher_Name + ' ' + data.teacher_LastName}
                                            title={data.classRoom_Subject}
                                            date={data.classRoom_DateTime}
                                            photoIconLink={Apis.SHOWIMAGE + data.educationSubject_IconeLink}
                                            price={data.classRoom_Price}
                                            LastPrice={data.last_Price}
                                            Discoun={data.classRoom_Discount}
                                            maxWidth={166} dir="rtl"
                                            teacherLink={Apis.SHOWIMAGE + data.teacher_PhotoLink}
                                            educationSubject={data.educationSubject_Name} />
                                    </Grid>
                                )
                            })
                                : null
                        }
                    </Grid>
                    <Grid item className={classes.NextArrowCourseDetail} onClick={() => ChangeTRS(-1)}></Grid>
                    <Grid item className={classes.PrevArrowCourseDetail} onClick={() => ChangeTRS(1)}></Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}
