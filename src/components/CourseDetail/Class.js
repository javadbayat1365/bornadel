import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'

export default function Class() {

    const classes = useStyles();

    return (
        <>
            <Grid container direction="column" justify="flex-start" item xs={2} className={classes.MarginTop}>
                <Typography className={classes.CourseDetailClassTitle}>کلاس</Typography>
                <Grid container className={classes.CourseDetailClassNameContainer}>
                    <span className={classes.CourseDetailClassNameTitle}>ساعت و روز برگزاری : </span>
                    <span className={classes.CourseDetailClassNameNUM}> 18:00 </span>
                    <span className={classes.CourseDetailClassName}> الی </span>
                    <span className={classes.CourseDetailClassNameNUM}> 19:00 </span>
                </Grid>
                <Grid container item className={classes.CourseDetailClassNameContainer}>
                    <span className={classes.CourseDetailClassNameTitle}>شنبه</span>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <span className={classes.CourseDetailClassNameTitle}>یکشنبه</span>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <span className={classes.CourseDetailClassNameTitle}>دوشنبه</span>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <span className={classes.CourseDetailClassNameTitle}>سه شنبه</span>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <span className={classes.CourseDetailClassNameTitle}>چهارشنبه</span>
                    <span className={classes.CourseDetailClassNameTitle}>/ </span>
                    <span className={classes.CourseDetailClassNameTitle}>پنجشنبه</span>
                </Grid>
                <Grid container item className={classes.CourseDetailteacherNameContainer2}>
                    <span className={classes.CourseDetailClassNameTitle}> مجموع ساعات کلاس :</span>
                    <span className={classes.CourseDetailClassNameNUM}> 60 </span>
                    <span className={classes.CourseDetailClassName}>ساعت</span>

                </Grid>
                <Grid container item className={classes.CourseDetailClassNameContainer}>
                    <span className={classes.CourseDetailClassNameTitle}> تعداد جلسات :</span>
                    <span className={classes.CourseDetailClassNameNUM}> 12 </span>
                    <span className={classes.CourseDetailClassName}>جلسه</span>

                </Grid>
                <Grid container item className={classes.CourseDetailClassNameContainer}>
                    <span className={classes.CourseDetailClassNameTitle}> تاریخ شروع :</span>
                    <span className={classes.CourseDetailClassNameNUM}> 1399/9/9 </span>

                </Grid>
            </Grid>
            <Grid item className={classes.verticalLine} xs={1}></Grid>
        </>
    )
}
