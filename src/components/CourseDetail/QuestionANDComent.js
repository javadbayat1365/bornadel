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
            <span onClick={() => SetActive(1)} className={activeHeader===1?classes.ActiveQuestion:classes.CourseDetailQuestion}>پرسش وپاسخ</span>
            <span onClick={() => SetActive(2)} className={activeHeader===2?classes.ActiveComent:classes.CourseDetailComent}>نظر کاربران</span>
            <Grid className={classes.ExtraWidth} item></Grid>
        </Grid>
    )
}