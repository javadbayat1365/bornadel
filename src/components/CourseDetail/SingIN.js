import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import useStyles from '../../styles'
export default function SingIN() {

    const classes = useStyles();

    return (
        <>
            <Grid container direction="column" className={classes.CourseLogoANDregisterContainer} item xs={4}>
                <Grid container direction="column" item className={classes.CourseLogoANDregisterBox}>
                    <Grid item className={classes.CourseLogoANDregisterShareLogo} ></Grid>
                    <span className={classes.CourseLogoANDregisterBellLogo} ></span>
                    <Grid className={classes.CourseLogoANDregisterLogo} ></Grid>
                    <span className={classes.CourseLogoANDregisterTitle} >Adobe Photosope CC</span>
                    <span  className={classes.CourseLogoANDregisterCircle}></span>
                </Grid>
                <Grid container item className={classes.CourseLogoANDregisterButtonContainer}>
                    <Button variant="contained" color="primary" className={classes.CourseLogoANDregisterButton}>ثبت نام در دوره</Button>
                </Grid>
            </Grid>
        </>
    )
}
