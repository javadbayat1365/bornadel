import { Grid } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from '../../styles'

export default function TeacherAcademyDetail() {
    const classes = useStyles();
    const [activeHeader, setActiveHeader] = useState(-1)
    let SetActive = (Num) => {
        setActiveHeader(Num)
    }
    return (
        <Grid item container className={classes.teacherANDAcademyDetail}>
            <span onClick={() => SetActive(1)} className={activeHeader===1?classes.ActiveTeacher:classes.CourseDetailteacherDetail}>استاد</span>
            <span onClick={() => SetActive(2)} className={activeHeader===2?classes.ActiveAcademy:classes.CourseDetailAcademyDetail}>آموزشگاه</span>
            <span onClick={() => SetActive(3)} className={activeHeader===3?classes.ActiveDownload:classes.CourseDetailِDownloadDetail}>لینک های دانلود</span>
            <Grid className={classes.ExtraWidth} item></Grid>
        </Grid>
    )
}
