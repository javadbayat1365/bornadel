import React, { useEffect, useContext, useState } from 'react'
import { Collapse, Grid } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import { AcademyPanelContext } from '../../../contexts/AcademyPanelContext'


export default function TableBody({ teacher }) {
    const classes = AcademePanelStyle()
    let { selectedTeachers, toggleSelectedTeacher } = useContext(AcademyPanelContext)
    const [showCollapse, setShowCollapse] = useState(-1)
    const [selected, setSelected] = useState(false)

    const selectItem = () => {
        toggleSelectedTeacher(teacher, selected)
    }
    useEffect(() => {
        var status = false
        selectedTeachers.forEach(su => {
            if (su.id === teacher.id) {
                status = true
            }
        })
        setSelected(status)
    }, [selectedTeachers])

    let ShowCollapseHandle = (index) => {
        if (showCollapse === index) {
            setShowCollapse(-1)
            return
        }
        setShowCollapse(index)
    }

    return (
        <>
            <Grid container className={classes.TeacherListTableRowContainer}>
                {/* <Checkbox checked={selected} onChange={selectItem} color="primary" /> */}
                <span className={showCollapse === teacher.index ? classes.ClollapseArrowShow : classes.ClollapseArrow} onClick={() => ShowCollapseHandle(teacher.index)}></span>
                <Grid item xs className={classes.TeacherListTableRowItem} >{teacher.name}</Grid>
                <Grid item xs className={classes.TeacherListTableRowItem} >{teacher.lastName}</Grid>
                <Grid item xs className={classes.TeacherListTableRowItem} >{teacher.birthday}</Grid>
                <Grid item xs className={classes.TeacherListTableRowItem} >{teacher.shCode}</Grid>
                <Grid item xs className={classes.TeacherListTableRowItem} >{teacher.nationalCode}</Grid>
            </Grid>
            <Collapse in={showCollapse === teacher.index} className={classes.CollapseRow} >
                <Grid container className={classes.TeacherListTableRowContainer}>
                    <Grid item xs className={classes.CollapseItemContainer} >
                        <Grid item className={classes.CollapseTitleItem} >شماره تلفن</Grid>
                        <Grid item className={classes.CollapseItem} >{teacher.phone}</Grid>
                    </Grid>
                    <Grid item xs className={classes.CollapseItemContainer} >
                        <Grid item className={classes.CollapseTitleItem} >شماره موبایل</Grid>
                        <Grid item className={classes.CollapseItem} >{teacher.mobile}</Grid>
                    </Grid>
                    <Grid item xs className={classes.CollapseItemContainer} >
                        <Grid item className={classes.CollapseTitleItem} >ایمیل</Grid>
                        <Grid item className={classes.CollapseItem} >{ }</Grid>
                    </Grid>
                    <Grid item xs className={classes.CollapseItemContainer} >
                        <Grid item className={classes.CollapseTitleItem} >آدرس</Grid>
                        <Grid item className={classes.CollapseItemAdress} >{teacher.address}</Grid>
                    </Grid>
                    <Grid item xs className={classes.CollapseItemContainer} >
                        <Grid item className={classes.CollapseItemPhoto} >{ }</Grid>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    )
}
