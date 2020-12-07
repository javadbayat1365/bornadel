import React, { useContext, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';
import useStyles from '../../../styles'
import {CoursesContext} from '../../../contexts/CoursesContext'

export default function DegreeSwith() {
    const classes = useStyles()
    let {checkedDegreeSwith, setCheckedDegreeSwith}=useContext(CoursesContext)

    return (
        <Grid item container justify="flex-end" alignItems="center" className={classes.swich2}>
            <Grid item><Typography className={classes.switchText}>با مدرک</Typography></Grid>
            <Grid item>
                <Switch
                    checked={checkedDegreeSwith}
                    color="primary"
                    classes={{ checked: classes.CheckedReadyClasses, thumb: classes.thumbReadyClasses }}
                    onChange={(e) => { setCheckedDegreeSwith(!checkedDegreeSwith) }}
                    name="checked" />
            </Grid>
        </Grid>
    )
}
