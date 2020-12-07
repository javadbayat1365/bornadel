import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'

export default function Academy() {

    const classes = useStyles();

    return (
        <>
            <Grid container container direction="column" justify="flex-start" item xs={2} className={classes.MarginTop}>
                <Typography className={classes.CourseDetailAcademyTitle}>آموزشگاه</Typography>
                <Grid container className={classes.CourseDetailAcademyNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>آموزشگاه : </span>
                    <span className={classes.CourseDetailteacherName}>هجرت</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>امتیاز آموزشگاه : </span>
                    <span className={classes.CourseDetailteacherNameNUM1}>365</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>مدرک : </span>
                    <span className={classes.CourseDetailteacherName}> دارد </span>
                </Grid>
                <Grid container className={classes.CourseDetailAcademyImageContainer}>
                    <span className={classes.CourseDetailَAcademyImage}></span>

                </Grid>
            </Grid>
        </>
    )
}
