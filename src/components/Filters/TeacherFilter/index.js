import React, { useState, useContext, useEffect } from 'react'
import useStyles from '../../../styles'
import { Grid, Typography } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CoursesContext } from '../../../contexts/CoursesContext'
export default function TeacherFilter() {
    const classes = useStyles()
    const [checked, setChecked] = useState([false])
    let { teacher, filteTeacher, setFilterTeacher, selectedTeacher, setSelectedTeacher } = useContext(CoursesContext)

    return (
        <Grid item className={classes.teacherFilter}>
            <Typography className={classes.teacherFilterTitle}>استاد</Typography>
            <Grid item container wrap="nowrap" className={classes.inputGrid2}>
                <Grid item className={classes.searchiconFilter}>
                </Grid>
                <input type="text" placeholder="جستجو استاد ..." className={classes.searchInputteacherFilter}
                    onChange={(e) => {
                        var val = e.target.value
                        var regex = new RegExp(val, 'i')
                        setFilterTeacher(teacher.filter((ft) => {
                            return regex.test(ft.name)
                        }))
                    }} />
            </Grid>
            <Grid item direction="column" className={`${classes.teacherFilterBox} CustomScroll`}>
                {filteTeacher&&filteTeacher.length>0?filteTeacher.map((data, index) => {
                    return (
                        <Grid item container className={classes.FormControllContainer}>
                            <Grid item >
                                <FormControlLabel
                                    key={index}
                                    classes={{ label: classes.levelFilterText }}
                                    control={
                                        <Checkbox
                                            name="TeacherChecked"
                                            color="primary"
                                            size="small"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedTeacher([...selectedTeacher, data.teacher_ID])
                                                } else {
                                                    setSelectedTeacher(selectedTeacher.filter((sr) => {
                                                        if (sr === data.teacher_ID) {
                                                            return false
                                                        }
                                                        return true
                                                    }))
                                                }
                                            }}
                                        />
                                    }
                                    label={data.teacher_Name+" "+data.teacher_LastName}
                                />
                            </Grid>
                        </Grid>
                    )
                }):null}
            </Grid>
        </Grid>
    )
}
