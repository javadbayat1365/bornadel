import React from 'react'
import { Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'

export default function AcademyProfileTable() {
    const classes = AcademePanelStyle()
    return (
        <>
            <Grid container className={classes.AcademyProfileTableContainer}>
                <Grid item className={classes.AcademyProfileTableRow}>ردیف</Grid>
                <Grid item className={classes.AcademyProfileTableName}>نام</Grid>
                <Grid item className={classes.AcademyProfileTableLink}>لینک</Grid>
            </Grid>
            <Grid container className={classes.AcademyProfileTableContainer}>
                <Grid item className={classes.AcademyProfileTableRow}></Grid>
                <Grid item className={classes.AcademyProfileTableName}></Grid>
                <Grid item className={classes.AcademyProfileTableLink}></Grid>
            </Grid>
            <Grid container className={classes.AcademyProfileTableContainer}>
                <Grid item className={classes.AcademyProfileTableRow}></Grid>
                <Grid item className={classes.AcademyProfileTableName}></Grid>
                <Grid item className={classes.AcademyProfileTableLink}></Grid>
            </Grid>
            <Grid container className={classes.AcademyProfileTableContainer}>
                <Grid item className={classes.AcademyProfileTableRow}></Grid>
                <Grid item className={classes.AcademyProfileTableName}></Grid>
                <Grid item className={classes.AcademyProfileTableLink}></Grid>
            </Grid>
            <Grid container className={classes.AcademyProfileTableContainer}>
                <Grid item className={classes.AcademyProfileTableRow}></Grid>
                <Grid item className={classes.AcademyProfileTableName}></Grid>
                <Grid item className={classes.AcademyProfileTableLink}></Grid>
            </Grid>
            <Grid container className={classes.AcademyProfileTableContainer}>
                <Grid item className={classes.AcademyProfileTableRow}></Grid>
                <Grid item className={classes.AcademyProfileTableName}></Grid>
                <Grid item className={classes.AcademyProfileTableLink}></Grid>
            </Grid>
        </>
    )
}
