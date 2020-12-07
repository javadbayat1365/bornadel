import React, { useContext } from 'react'
import { Button, Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import {AcademyPanelContext} from '../../../contexts/AcademyPanelContext'


export default function TeacherDetail() {
    const classes = AcademePanelStyle()
    let {setPageTypeTeacherList}=useContext(AcademyPanelContext)

    return (
        <Grid container className={classes.teacherDetailBox}>
            <Grid container className={classes.teacherDetailContainer}>
                <Grid container item justify="space-between" alignItems="flex-start"  >
                    <Grid item className={classes.TeacherDetailTitle}>اطلاعات اصلی مدرس</Grid>
                    <Grid item className={classes.TeacherDetailImageContainer}>
                        <img />
                    </Grid>
                </Grid>
                <Grid container item className={classes.teacherDetailFieldContainer} >
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>نام :</Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>نام خانوادگی :</Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>کد ملی :</Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>تاریخ تولد : </Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>شماره تلفن : </Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>شماره موبایل : </Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>ایمیل : </Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={window.innerWidth > 1150 ? 4 : 6} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}>شماره شناسنامه : </Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                    <Grid item wrap="nowrap" xs={12} container className={classes.teacherDetailFieldBox} >
                        <Grid item className={classes.teacherDetailText}> آدرس : </Grid>
                        <input className={classes.teacherDetailInput} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item justify="center">
                <Button
                    variant="outlined"
                    className={classes.PrevTeacherDetailButton}
                    onClick={() => { setPageTypeTeacherList(1) }}
                >قبل</Button>
                <Button
                    variant="outlined"
                    className={classes.NextTeacherDetailButton}
                    onClick={() => { setPageTypeTeacherList(3) }}
                >بعد</Button>
            </Grid>
        </Grid>
    )
}
