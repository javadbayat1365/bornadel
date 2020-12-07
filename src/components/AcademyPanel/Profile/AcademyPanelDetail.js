import React, { useContext } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { AcademyPanelContext } from '../../../contexts/AcademyPanelContext'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'

export default function AcademyPanelDetail() {
    const classes = AcademePanelStyle()
    let { } = useContext(AcademyPanelContext)

    return (
        <Grid container>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>نام آموزشگاه</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>نام مسئول</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}  >کد ملی مسئول</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>ایمیل</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>شماره مجوز</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>شماره ثبت</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>شماره موبایل</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>شماره تماس</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?3:4} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>تاریخ تاسیس</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={window.innerWidth>1200?9:12} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailText}>آدرس</Grid>
                <Grid item className={classes.AcademyPanelProfileDetailTextInput}></Grid>
            </Grid>
            <Grid item container xs={12} className={classes.AcademyPanelDetailContainer} >
                <Grid item className={classes.AcademyPanelProfileDetailDesInput}>
                    <Typography className={classes.AcademyPanelDetailDes}>توضیحات :</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
