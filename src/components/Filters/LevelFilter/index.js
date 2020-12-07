import React, { useContext, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../../styles'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CoursesContext } from '../../../contexts/CoursesContext'
export default function LevelFilter() {
    const classes = useStyles()

    let { level, setLevel, levelData } = useContext(CoursesContext)
    return (
        <Grid item className={classes.levelFilter}>
            <Typography className={classes.levelFilterTitle} >سطح دوره</Typography>
            <Grid item container className={classes.levelFilterContainer}>
                <Grid item container alignItems="center" className={classes.levelFilterContainerRow}>
                    {
                        levelData && levelData.length > 0 ? levelData.map((data, index) => {
                            return(
                            <Grid item container>
                                <FormControlLabel
                                    key={index}
                                    classes={{ label: classes.levelFilterText }}
                                    control={
                                        <Checkbox
                                            name="checkedA"
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setLevel([...level, data.classRoomLevel_ID])
                                                } else {
                                                    setLevel(level.filter((sr) => {
                                                        if (sr === data.classRoomLevel_ID) {
                                                            return false
                                                        }
                                                        return true
                                                    }))
                                                }
                                                // setCheckedA(!checkedA)
                                            }}
                                        />
                                    }
                                    label={data.classRoomLevel_Name}
                                />
                            </Grid>)
                        }) : null
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
