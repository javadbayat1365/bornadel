import React, { useState } from 'react'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import { Grid } from '@material-ui/core'

export default function AcademyPanelProfileCondition() {
    const [state, setState] = useState(1)
    const classes = AcademePanelStyle()
    return (
        <Grid container justify="center">
            <span className={classes.AcademyConditionText}>وضعیت :</span>
            <Grid item container alignItems="center" className={classes.AcademyConditionComponent} >
                <Grid item className={classes.AcademyConditionLine}>
                    <span className={state === 1 ? classes.AcademyPanelcircleActive1 : classes.AcademyPanelcircle1}>
                        <span className={classes.verticalLinAcademy1}></span>
                    </span>
                    <span className={state === 2 ? classes.AcademyPanelcircleActive2 : classes.AcademyPanelcircle2}>
                        <span className={classes.verticalLinAcademy2}></span>
                    </span>
                    <span className={state === 3 ? classes.AcademyPanelcircleActive3 : classes.AcademyPanelcircle3}>
                        <span className={classes.verticalLinAcademy3}></span>
                    </span>
                </Grid>
                <Grid container item>
                    <Grid item className={state === 1 ? classes.AcademyConditionBox1Active : classes.AcademyConditionBox1}>
                        <span className={classes.rectinBox1}></span>
                        <span className={state === 1 ? classes.AcadConTextactive : classes.AcadConText}>پیش ثبت نام</span>
                    </Grid>
                    <Grid item className={state === 2 ? classes.AcademyConditionBox2Active : classes.AcademyConditionBox2}>
                        <span className={state === 2 ? classes.AcadConTextactive : classes.AcadConText}>در حال بررسی</span>
                    </Grid>
                    <Grid item className={state === 3 ? classes.AcademyConditionBox3Active : classes.AcademyConditionBox3}>
                        <span className={state === 3 ? classes.AcadConTextactive : classes.AcadConText}>تاید شده</span>
                        <span className={state === 3 ?classes.rectinBox3Active:classes.rectinBox3}></span>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
