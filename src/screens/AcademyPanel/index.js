import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import AcademePanelStyle from '../../styles/AcademePanelStyle'
import { Link, Route } from 'react-router-dom'
import Profile from '../../components/AcademyPanel/Profile/Profile'
import ClassList from '../../components/AcademyPanel/ClassList'
import TeacherList from '../../components/AcademyPanel/TeacherList'

export default function PanelMasterLayout() {
    const classes = AcademePanelStyle()
    const [activeMenu, setActiveMenu] = useState(1)
    const pathname = window.location.pathname
    console.log(pathname);
    return (
        <>
            <Grid container direction="row" style={{ maxWidth: 1366 }}>
                <Grid container item direction="column" id="AcademyPanelContainer" alignItems="flex-start" className={classes.AcademyPanelContainer}>
                    <Grid container justify="center" item className={classes.APsideBarImageANDname}>
                        <Grid container item className={classes.AcademyImage}></Grid>
                        <Grid container item justify="center" className={classes.AcademyName}> آموزشگاه شهید عراقی</Grid>
                    </Grid>
                    <Grid component={Link} to="/AcademyPanel/Profile" container item
                        onClick={() => setActiveMenu(1)}
                        className={`${activeMenu === 1 ? classes.APsideBarProfileActive : classes.APsideBarProfile} ${classes.SidebarMenu}`}>
                        پروفایل
                    </Grid>
                    <Grid component={Link} to="/AcademyPanel/TeacherList" container item
                        onClick={() => setActiveMenu(2)}
                        className={`${activeMenu === 2 ? classes.APsideBarTeachersActive : classes.APsideBarTeachers} ${classes.SidebarMenu}`}>
                        لیست مدرسین
                    </Grid>
                    <Grid component={Link} to="/AcademyPanel/ClassList" container item
                        onClick={() => setActiveMenu(3)}
                        className={`${activeMenu === 3 ? classes.APsideBarClassesActive : classes.APsideBarClasses} ${classes.SidebarMenu}`}>
                        لیست کلاسها
                    </Grid>
                    <Grid container item
                        onClick={() => setActiveMenu(4)}
                        className={`${activeMenu === 4 ? classes.APsideBarCoursesActive : classes.APsideBarCourses} ${classes.SidebarMenu}`}>
                        لیست دوره ها
                    </Grid>
                    <Grid container item
                        onClick={() => setActiveMenu(5)}
                        className={`${activeMenu === 5 ? classes.APsideBarQuestionANDcomentActive : classes.APsideBarQuestionANDcoment} ${classes.SidebarMenu}`}>
                        پرسش ها وکامنت ها
                    </Grid>
                    <Grid container item
                        onClick={() => setActiveMenu(6)}
                        className={`${activeMenu === 6 ? classes.APsideBarTicketActive : classes.APsideBarTicket} ${classes.SidebarMenu}`}>
                        تیکت ها
                    </Grid>
                    <Grid container item
                        onClick={() => setActiveMenu(7)}
                        className={`${activeMenu === 7 ? classes.APsideBarBankActive : classes.APsideBarBank} ${classes.SidebarMenu}`}>
                        کیف پول
                </Grid>
                </Grid>
                <Grid container item direction="column" style={{ flex: 1 }}>
                    <Grid container item alignItems="center" justify="space-between" className={classes.AcademyPanelAppBar}>
                        <Grid container alignItems="center" justify="center" item>
                            <Grid item className={classes.AcademyPanelScoreContainer}>
                                <span className={classes.AcademyPanelScore}>امتیاز آموزشگاه :</span>
                                <span className={classes.AcademyPanelScoreText}>365</span>
                            </Grid>
                            <Grid container item justify="flex-end" className={classes.AcademyAppBarICONContainer}>
                                <Grid item className={classes.AcademyAppBarICON1}></Grid>
                                <Grid item className={classes.AcademyAppBarICON2}></Grid>
                                <Grid item className={classes.AcademyAppBarICON3}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item justify="space-between" >
                        <Route path="/AcademyPanel/Profile" component={Profile} />
                        <Route path="/AcademyPanel/TeacherList" component={TeacherList} />
                        <Route path="/AcademyPanel/ClassList" component={ClassList} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}




