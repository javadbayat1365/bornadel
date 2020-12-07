import CoursesComponent from '../../CoursesComponent/CoursesComponent'
import React, { useState, useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from '../../../styles'
import { ChangeHistorySharp } from '@material-ui/icons';
import { HomePageContext } from '../../../contexts/HomePageContext'
import { fetchPost } from '../../../config/Utils'
import Apis from '../../../constants/Api'

export default function RecentView() {
    let { recentView } = useContext(HomePageContext)
    const classes = useStyles();
    const [sliderWidth, setSliderWidth] = useState(0)
    const count = window.innerWidth > 1220 ? 5 : window.innerWidth > 1030 ? 4 : 3
    const [trs, setTrs] = useState(0)
    const a = recentView ? Math.floor(recentView.length / count) : 0
    const b = recentView ? recentView.length % count : 0
    const [x, setX] = useState(1)
    useEffect(() => {
        let SliderContainer = document.getElementById('SliderContainer')
        setSliderWidth(SliderContainer.offsetWidth);
    }, [])


    let ChangeTRS = (condition) => {
        if (condition === 1) {
            setX(prev => x > a ? setX(a) : setX(prev + 1))
            if (recentView.length - trs < count + 1) {
                return
            }
            if (x === a) {
                if (b !== 0) {
                    setTrs(prev => setTrs(prev + b))
                    return
                }
            } else {
                setTrs((prev) => setTrs(prev + count))
            }
        }
        if (condition === -1) {
            setX(prev => x < 1 ? setX(1) : setX(prev - 1))
            if (trs < count) {
                setTrs(0)
                return
            }
            setTrs((prev) => setTrs(prev - count))
        }
    }
    return (
        <Grid container style={{ width: "100%", marginTop: 8 }} id="SliderContainer" >
            <Grid container item style={{ overflow: "hidden" }}>
                <Grid item className={classes.NextArrow}></Grid>
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
                                        minWidth={166}
                                        maxWidth={166} 
                                        dir="rtl"
                                        teacherLink={Apis.SHOWIMAGE + data.teacher_PhotoLink}
                                        educationSubject={data.educationSubject_Name} />
                                </Grid>
                            )
                        })
                            : null
                    }
                </Grid>
                <Grid item className={classes.NextArrow} onClick={() => ChangeTRS(-1)}></Grid>
                <Grid item className={classes.PrevArrow} onClick={() => ChangeTRS(1)}></Grid>
            </Grid>
        </Grid>
    )
}
