import React, { useState, useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import { Link } from 'react-router-dom'


export default function CoursesComponent({ data, id, teacherName, educationSubject, title, date, price, LastPrice, photoIconLink, teacherLink, Discoun,minWidth ,maxWidth, deadLine, dir }) {
    const classes = useStyles()

    let { setCourseDetailData } = useContext(CourseDetailContext)
    /*----------- seprate number input 3 number---------------- */
    function separateNum(value, input) {
        var nStr = value + '';
        nStr = nStr.replace(/\,/g, "");
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        if (input !== undefined) {

            input.value = x1 + x2;
        } else {
            return x1 + x2;
        }
    }
    let newDate = date.substr(0, 11)
    return (
        <Grid item xs={12}
            className={classes.coursesComponentContainer}
            style={{ maxWidth: maxWidth,minWidth:180 }}
            onClick={() => { setCourseDetailData(data) }}
            component={Link} to={`/CourseDetail/${id}/${title}`}>

            <Grid item className={classes.CoursesRect} style={{ border: deadLine ? "1px solid #d7d7d7" : "1px solid #c59428", backgroundColor: deadLine ? "#d7d7d7" : "#fff" }} >
                <Grid item className={classes.coursesTextContainer}><Typography className={classes.coursesText}>{educationSubject}</Typography></Grid>
                <Grid item className={classes.circleinRectContainer} style={{ border: deadLine ? "1px solid #d7d7d7" : "1px solid #c59428", }} >
                    <Grid item className={classes.circleinRect} ></Grid>
                </Grid>
                <Grid item className={classes.circleinRect2}>
                    <img src={teacherLink} className={classes.coursesIconCicle} />
                </Grid>
                <Grid item className={classes.coursesIcon}>
                    <img src={photoIconLink} className={classes.coursesIconRect} />
                </Grid>
            </Grid>
            <Grid item container alignItems="center" direction="column" className={classes.CoursesDetail}>
                <Grid item className={classes.Coursesteacher}><Typography className={classes.CoursesteacherText}>مدرس : {teacherName}</Typography></Grid>
                <Grid item className={classes.CoursesTitle}>{title}</Grid>
                {
                    deadLine===2 ?
                        <Typography className={classes.CoursesDateStartText2}>زمان ثبت نام به پایان رسیده</Typography>
                        :
                        <>
                            {
                                dir === "ltr" ?
                                    <>
                                        <Grid item className={classes.CoursesDateStart}><Typography component="span" className={classes.CoursesDateStartText1}><Typography component="span" className={classes.FarsiNumber}>{newDate}</Typography>  : زمان شروع </Typography></Grid>
                                        <Grid item container justify="center" alignItems="center" className={classes.CoursesDiscount}>
                                            <span className={classes.DiscounRect}>
                                                <Typography className={`${classes.DiscounRectText} ${classes.FarsiNumber}`}>%{Discoun}</Typography>
                                            </span>
                                            <Typography className={`${classes.DiscounText} ${classes.FarsiNumber}`}>{separateNum("16000000")}</Typography>
                                        </Grid>
                                    </>
                                    :
                                    <>

                                        <Grid item className={classes.CoursesDateStart}><Typography component="span" className={classes.CoursesDateStartText1}>زمان شروع : <Typography component="span" className={classes.FarsiNumber}>{newDate}</Typography></Typography></Grid>
                                        <Grid item container justify="center" alignItems="center" className={classes.CoursesDiscount}>
                                            <Typography className={`${classes.DiscounText} ${classes.FarsiNumber}`}>{Discoun && Discoun > 0 ? separateNum("16000000") : " "}</Typography>
                                            {
                                                Discoun && Discoun > 0 ?
                                                    <span className={classes.DiscounRect}>
                                                        <Typography className={`${classes.DiscounRectText} ${classes.FarsiNumber}`}>%{Discoun}</Typography>
                                                    </span>
                                                    :
                                                    null
                                            }
                                        </Grid>


                                    </>
                            }
                        </>
                }
                {
                    dir === "ltr" ?
                        <Grid item className={classes.CoursesPrice} style={{ marginTop: Discoun ? 0 : 21 }}>
                            <Typography component="span" className={classes.CoursesPriceText}> تومان <Typography className={classes.FarsiNumber1}>{Discoun && Discoun > 0 ? separateNum(LastPrice) : separateNum(price)}</Typography></Typography>
                        </Grid>
                        :
                        <Grid item className={classes.CoursesPrice} style={{ marginTop: Discoun ? 0 : 21 }}>
                            <Typography component="span" className={classes.CoursesPriceText}><Typography className={classes.FarsiNumber1}>{Discoun && Discoun > 0 ? separateNum(LastPrice) : separateNum(price)}</Typography> تومان </Typography>
                        </Grid>

                }
            </Grid>
        </Grid>
    )
}
