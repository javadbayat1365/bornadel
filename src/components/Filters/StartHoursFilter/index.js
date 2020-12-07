import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../../styles'
import { CoursesContext } from '../../../contexts/CoursesContext'
export default function StartHoursFilter() {
    const classes = useStyles()
    let { minTime, setMinTime, maxTime, setMaxTime } = useContext(CoursesContext)

    const timeFormat = (val) => {
        var newval = ""
        val = val.replace(/:/g, "")
        if (val.length > 2) {
            newval = val.slice(0, 2) + ":" + val.slice(2)
        } else {
            newval = val
        }
        return newval
    }
    return (
        <Grid item container className={classes.startHoursFilter}>
            <Typography className={classes.startHoursFilterTitle}>ساعت برگزاری کلاس</Typography>
            <Grid item container justify="center" alignItems="center" className={classes.startHoursFilterBox}>
                <Typography className={classes.startHoursFilterText}> ازساعت </Typography>
                <input type="text" placeholder="00:00" className={classes.startHoursFilterSearch} value={minTime}
                    onChange={(e) => {
                        setMinTime(timeFormat(e.target.value))
                    }}></input>
                <Typography className={classes.startHoursFilterText}> تا ساعت  </Typography>
                <input type="text" placeholder="24:00" className={classes.startHoursFilterSearch} value={maxTime}
                    onChange={(e) => {
                        setMaxTime(timeFormat(e.target.value))
                    }}></input>
            </Grid>
        </Grid>
    )
}
