import React, { useState, useContext } from 'react'
import useStyles from '../../../styles'
import { Grid, Typography } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CoursesContext } from '../../../contexts/CoursesContext'

export default function AcademyFilter() {
    const classes = useStyles()
    let { academy, filteAcademy, setFilterAcademy, selectedAcademy, setSelectedAcademy } = useContext(CoursesContext)

    
    return (
        <Grid item className={classes.AcademyFilter}>
            <Typography className={classes.AcademyFilterTitle}>آموزشگاه</Typography>
            <Grid item  container direction="column" className={classes.AcademyFilterBpx}>
                {filteAcademy&&filteAcademy.length>0?filteAcademy.map((data, index) => {
                    return (
                        <Grid item container className={classes.FormControllContainer}>
                            <Grid item >
                                <FormControlLabel
                                    key={index}
                                    classes={{ label: classes.levelFilterText }}
                                    control={
                                        <Checkbox
                                            name="checked"
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedAcademy([...selectedAcademy, data.academy_ID])
                                                } else {
                                                    setSelectedAcademy(selectedAcademy.filter((sr) => {
                                                        if (sr === data.academy_ID) {
                                                            return false
                                                        }
                                                        return true
                                                    }))
                                                }
                                            }}
                                        />
                                    }
                                    label={data.academy_Name}
                                />
                            </Grid>
                        </Grid>
                    )
                }):null}
            </Grid>
        </Grid>
    )
}
