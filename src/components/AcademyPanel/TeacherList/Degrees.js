import React from 'react'
import { Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'


export default function Degrees() {
    const classes = AcademePanelStyle()
    return (
        <>
            <Grid container justify="space-between" alignItems="center" item>
                <Grid item className={classes.HeaderTextTeacherList}>مدارک تحصیلی</Grid>
            </Grid>
            <Grid container item className={classes.teachrListTableContainer} >
                <Grid container justify="space-between" item className={classes.teachrListTableHeader}>
                    <Grid item xs className={classes.teacherLiseTableHeaderField}>مدارک تحصیلی</Grid>
                    <Grid item xs className={classes.teacherLiseTableHeaderField}>رشته تحصیلی</Grid>
                    <Grid item xs className={classes.teacherLiseTableHeaderField}>دانشگاه</Grid>
                </Grid>
                <Grid container className={classes.TeacherListTableRowContainer}>
                    <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                    <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                    <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                </Grid>
            </Grid>
        </>
    )
}
