import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'

export default function Teacher() {

    const classes = useStyles();

    return (
        <>
            <Grid container direction="column" justify="flex-start" item xs={2} className={classes.MarginTop}>
                <Typography className={classes.CourseDetailClassTitle}>مدرس</Typography>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>مدرس : </span>
                    <span className={classes.CourseDetailteacherName}>دکتر امیر نجفی</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>امتیاز مدرس : </span>
                    <span className={classes.CourseDetailteacherNameNUM1}>365</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>سوابق کاری و رزومه مدرس</Typography>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameNUM2}> 5 </span>
                    <span className={classes.CourseDetailteacherNameTitle}>دوره آخر مدرس :</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer2}>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>فتوشاپ</Typography>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>corel</Typography>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>primier</Typography>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>Adobe XD</Typography>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>نجاری</Typography>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>طراحی سایت</Typography>
                </Grid>
            </Grid>
            <Grid item className={classes.verticalLine} xs={1}></Grid>
        </>
    )
}
