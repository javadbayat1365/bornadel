import React, { useContext } from 'react'
import { Modal,Button, Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import {AcademyPanelContext} from '../../../contexts/AcademyPanelContext'
import DegreesModal from './DegreesModal'
export default function TeacherDetail() {
    const classes = AcademePanelStyle()
    let {setPageTypeTeacherList}=useContext(AcademyPanelContext)
    return (
        <Grid container alignItems="center" className={classes.teacherDetailBox}>
            <Grid container className={classes.teacherDetailContainer}>
                <Grid container item justify="space-between" alignItems="flex-start"  >
                    <Grid item className={classes.TeacherDetailTitle}>مدارک تحصیلی</Grid>
                </Grid>
                <Grid container item className={classes.AddteachrListTableContainer} >
                    <Grid container justify="space-between" item className={classes.teachrListTableHeader}>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>مدارک تحصیلی</Grid>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>رشته تحصیلی</Grid>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>دانشگاه</Grid>
                    </Grid>
                    <Grid container className={classes.TeacherListTableRowContainer}>
                        <Grid item xs className={classes.AddTeacherListTableRowItem} ></Grid>
                        <Grid item xs className={classes.AddTeacherListTableRowItem} ></Grid>
                        <Grid item xs className={classes.AddTeacherListTableRowItem} ></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item justify="center">
                <Button
                    variant="outlined"
                    className={classes.PrevTeacherDetailButton}
                    onClick={()=>{setPageTypeTeacherList(2)}}
                >قبل</Button>
                <Button
                    variant="outlined"
                    className={classes.NextTeacherDetailButton}
                    onClick={()=>{setPageTypeTeacherList(4)}}
                >بعد</Button>
            </Grid>
            <DegreesModal/>
        </Grid>
    )
}
