import React from 'react'
import { Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import ClassLists from './ClassLists'

export default function ClassList() {
    const classes = AcademePanelStyle()

    return (
        <>
            <Grid container className={classes.TeacherListContainer} >
                <Grid container justify="space-between" alignItems="center" item>
                    <Grid item className={classes.HeaderTextTeacherList}>لیست مدرسین</Grid>
                    <Grid item className={classes.IconContainerTeacherList}>
                        <span className={classes.editTeacherINTeacherList}></span>
                        <span className={classes.deleteTeacherINTeacherList}></span>
                        <span className={classes.addTeacherINTeacherList}></span>
                    </Grid>
                </Grid>
                <Grid container item className={classes.teachrListTableContainer} >
                    <Grid container justify="space-between" item className={classes.teachrListTableHeader}>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>نام و نام خانوادگی</Grid>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>کد ملی</Grid>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>تاریخ تولد</Grid>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>شماره موبایل</Grid>
                        <Grid item xs className={classes.teacherLiseTableHeaderField}>امتیاز</Grid>
                    </Grid>
                    <Grid container item>
                        <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                        <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                        <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                        <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                        <Grid item xs className={classes.TeacherListTableRowItem} ></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.TeacherListContainer} >
                <Grid container justify="space-between" alignItems="center" item>
                    <Grid item className={classes.HeaderTextTeacherList}>لیست کلاسها</Grid>
                    <Grid item className={classes.IconContainerTeacherList}>
                        <span className={classes.editTeacherINTeacherList}></span>
                        <span className={classes.deleteTeacherINTeacherList}></span>
                        <span onClick={() => {  }} className={classes.addTeacherINTeacherList}></span>
                    </Grid>
                </Grid>
                <Grid container item className={classes.teachrListTableContainer} >
                    <Grid container justify="space-between" item className={classes.teachrListTableHeader}>
                        <Grid item xs className={classes.ClassListteacherLiseTableHeaderField1}>لیست کلاسها</Grid>
                        <Grid item xs className={classes.ClassListteacherLiseTableHeaderField2}>توضیحات</Grid>
                    </Grid>
                    <Grid container item>
                        <ClassList teacher={{
                            index: 0,
                            name: "لیست 1",
                            Description: "توضیحات 1",
                            failName: "1372/08/23",
                            Link: "dsfsdfervrcdsfercsxcgergregerfdsvdver",
                            
                        }} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
