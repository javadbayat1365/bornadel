import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import useStyles from '../../styles'

export default function ImageUnderSimilar() {
    const classes = useStyles();

    const [CourseDetailImageWidth, setCourseDetailImageWidth] = useState(0)
    useEffect(() => {
        let CourseDetailImage = document.querySelector('#CourseDetailImage')
        setCourseDetailImageWidth(CourseDetailImage.offsetWidth)
    }, [])
    useEffect(() => {
        console.log(CourseDetailImageWidth);
    }, [CourseDetailImageWidth])
    return (
        <Grid container className={classes.CourseDetailImageUnderSimilar} id="CourseDetailImage" style={{ height: CourseDetailImageWidth / 3 }}>
            {/* <img src= /> */}
        </Grid>
    )
}
