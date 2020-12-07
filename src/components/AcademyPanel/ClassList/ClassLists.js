import React, { useState } from 'react'
import { Collapse, Grid } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'

export default function TableBody({ ClassList }) {
    const classes = AcademePanelStyle()
    const [showCollapse, setShowCollapse] = useState(-1)

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
                <span className={showCollapse === ClassList.index ? classes.ClollapseArrowShow : classes.ClollapseArrow}
                    onClick={() => ShowCollapseHandle(ClassList.index)}>
                </span>
                <Grid item xs className={classes.ClassListTeacherListTableRowItem1} >{ClassList.name}</Grid>
                <Grid item xs className={classes.ClassListTeacherListTableRowItem2} >{ClassList.Description}</Grid>
            </Grid>
            <Collapse in={showCollapse === ClassList.index} className={classes.CollapseRow} >
                <Grid container className={classes.TeacherListTableRowContainer}>
                    <Grid item xs className={classes.CollapseItemContainer1} >
                        <Grid item className={classes.CollapseTitleItem} >نام فایل</Grid>
                        <Grid item className={classes.CollapseItem} >{ClassList.failName}</Grid>
                    </Grid>
                    <Grid item xs className={classes.CollapseItemContainer2} >
                        <Grid item className={classes.CollapseTitleItem} >لینک</Grid>
                        <Grid item className={classes.CollapseItem} >{ClassList.Link}</Grid>
                    </Grid>
                </Grid>
            </Collapse>
        </>
    )
}
