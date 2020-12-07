import React, { useState,useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useStyles from '../../../styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {CoursesContext} from '../../../contexts/CoursesContext'

export default function ReadyClasses() {
    const classes = useStyles()
    let {checkedReadyClasses, setCheckedReadyClasses}=useContext(CoursesContext)

    return (
        <Grid item container justify="center" alignItems="center" className={classes.swich1}>
            <Grid item><Typography className={classes.switchText}>کلاس های آماده برگزاری</Typography></Grid>
            <Grid item>
                <Switch
                    checked={checkedReadyClasses}
                    color="primary"
                    classes={{ checked: classes.CheckedReadyClasses, thumb: classes.thumbReadyClasses }}
                    onChange={(e) => { setCheckedReadyClasses(!checkedReadyClasses) }}
                    name="checked" />
            </Grid>
        </Grid>
    )
}
