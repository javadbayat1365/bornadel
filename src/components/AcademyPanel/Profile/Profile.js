import React from 'react'
import { Grid, Button } from '@material-ui/core'
import AcademePanelStyle from '../../../styles/AcademePanelStyle'
import AcademyPanelProfileCondition from './AcademyPanelProfileCondition'
import AcademyPanelDetail from './AcademyPanelDetail'
import AcademyProfileTable from './AcademyProfileTable'

export default function Profile() {
    const classes = AcademePanelStyle()

    return (
        <Grid container className={classes.ProfileContainer}>
            <Grid container item>
                <Grid item xs={4} className={classes.AcademyEditProfileANDpassword}>
                    <Grid item>
                        <Button variant="contained" color="primary" classes={{ label: classes.EditProfiletext }} className={classes.EditProfile}>
                            ویرایش پروفایل
                         </Button>
                        <Button variant="contained" color="primary" classes={{ label: classes.EditProfiletext }} className={classes.EditPassword}>
                            ویرایش رمز عبور
                         </Button>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.AcademyCondition}>
                    <AcademyPanelProfileCondition />
                </Grid>
                <Grid item xs={2} className={classes.AcademyLogo}>
                    <span className={classes.AcademyLogoRect}></span>
                    <span className={classes.AcademyLogoText}></span>
                </Grid>
            </Grid>
            <Grid item container>
                <AcademyPanelDetail />
            </Grid>
            <Grid item container>
                <AcademyProfileTable />
            </Grid>
        </Grid>
    )
}
