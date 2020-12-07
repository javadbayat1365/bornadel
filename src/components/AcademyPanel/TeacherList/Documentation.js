import React from 'react'
import { Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'

export default function Degrees() {
    const classes = AcademePanelStyle()
    return (
        <>
            <Grid container justify="space-between" alignItems="center" item>
                <Grid item className={classes.HeaderTextTeacherList}>مستندات</Grid>
            </Grid>
            <Grid container item className={classes.teachrListTableContainer} >
                <Grid container justify="space-between" item className={classes.teachrListTableHeader}>
                    <Grid item xs className={classes.teacherLiseTableHeaderFieldDUC1}>نام</Grid>
                    <Grid item xs className={classes.teacherLiseTableHeaderFieldDUC2}>لینک</Grid>
                </Grid>
                <Grid container className={classes.TeacherListTableRowContainer}>
                    <Grid item xs className={classes.TeacherListTableRowItemDUC1} ></Grid>
                    <Grid item xs className={classes.TeacherListTableRowItemDUC2} ></Grid>
                </Grid>
            </Grid>
        </>
    )
}
