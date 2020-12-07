import React, { useContext } from 'react'
import { Button, Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import {AcademyPanelContext} from '../../../contexts/AcademyPanelContext'


export default function TeacherDetail() {
    const classes = AcademePanelStyle()
    let {setPageTypeTeacherList,ApproveTeacher}=useContext(AcademyPanelContext)

    return (
        <Grid container className={classes.teacherDetailBox}>
            <Grid container className={classes.teacherDetailContainer}>
                <Grid container item justify="space-between" alignItems="flex-start"  >
                    <Grid item className={classes.AddDUCTeacherDetailTitle}>مستندات</Grid>
                </Grid>
                <Grid container item className={classes.AddteachrListTableContainer} >
                    <Grid container justify="space-between" item className={classes.teachrListTableHeader}>
                        <Grid item xs className={classes.ADDteacherDUCteacherLiseTableHeaderField1}>نام</Grid>
                        <Grid item xs className={classes.ADDteacherDUCteacherLiseTableHeaderFieldDUC2}>لینک</Grid>
                    </Grid>
                    <Grid container className={classes.TeacherListTableRowContainer}>
                        <Grid item xs className={classes.AddTeacherListTableRowItem1} ></Grid>
                        <Grid item xs className={classes.AddTeacherListTableRowItem2} ></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item justify="center">
                <Button
                    variant="outlined"
                    className={classes.PrevTeacherDetailButton}
                    onClick={()=>{setPageTypeTeacherList(3)}}
                >قبل</Button>
                <Button
                    variant="contained"
                    className={classes.NextTeacherDetailButtonAccess}
                    onClick={()=>{ApproveTeacher()}}
                >تایید</Button>
            </Grid>
        </Grid>
    )
}
