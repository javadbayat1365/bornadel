import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { useParams } from "react-router-dom";
import Class from '../../components/CourseDetail/Class'
import Teacher from '../../components/CourseDetail/Teacher'
import Academy from '../../components/CourseDetail/Academy'
import SingIN from '../../components/CourseDetail/SingIN'
import TeacherAcademyDetail from '../../components/CourseDetail/TeacherAcademyDetail'
import QuestionANDComent from '../../components/CourseDetail/QuestionANDComent'
import SimilarItem from '../../components/CourseDetail/SimilarItem'
import ImageUnderSimilar from '../../components/CourseDetail/ImageUnderSimilar'



export default function CourseDetail() {
    const classes = useStyles();
    let { id, title } = useParams()
    return (
        <Grid container justify="center" className={classes.CourseDetailContainer}>
            <Grid item container direction="column" className={classes.CourseDetailBox}>
                <Grid item container className={classes.CourseDetailTextcontainer}>
                    <Typography className={classes.CourseDetailText}>طراحی بیت مپ با فتوشاپ</Typography>
                </Grid>
                <Grid item container direction="row" alignItems="flex-start" className={classes.CourseDetailElements}>
                    <Class />
                    <Teacher />
                    <Academy />
                    <SingIN />
                </Grid >
            </Grid>
            <TeacherAcademyDetail />
            <QuestionANDComent />
            <SimilarItem />
            <ImageUnderSimilar />
        </Grid>
    )
}
