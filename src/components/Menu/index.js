import React, { useContext, useEffect } from 'react'
import { Fade, Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import FirstLevel from './FirstLevel'
import SecondLevel from './SecondLevel'
import ThirdLevel from './ThirdLevel'

export default function Menu() {
    const classes = useStyles();
    let { showMenu, setShowMenu, HandleShow, HandleExit, firstlayout, SecondLayer, filterSecondmenu, allmenu,
        filterThirdmenu, SecondLevelShow, setSecondLevelShow, ThirdLevelShow, setThirdLevelShow
        , ThirdLayer, secondHeight, setSecondHeight } = useContext(MasteLayoutContext)
    return (
        <Grid container item className={classes.MenuContainer}>
            <FirstLevel />
            <SecondLevel />
            <ThirdLevel />
        </Grid>
    )
    // filterThirdmenu
    // return (
    //     <Grid container item style={{ display: showMenu ? "flex" : "none" }}>
    //         <Fade in={true} timeout={300} onMouseEnter={() => { HandleShow() }}
    //             onMouseLeave={() => { HandleExit() }}>
    //             <Grid container className={classes.MenuContainer}>
    //                 <Grid item xs={2} container direction="column" alignItems="center" className={classes.rightMenuGrid}>
    //                     {firstlayout.map((item) => {
    //                         return (
    //                             <Grid container item justify="flex-start" alignItems="center" className={classes.MenuItem}
    //                                 onMouseEnter={() => SecondLayer(item.educationSubject_ID)}
    //                                 onMouseLeave={() => { }}
    //                             >
    //                                 <Typography className={classes.MenuItemLogo}>{item.educationSubject_Name}</Typography>
    //                             </Grid>
    //                         )
    //                     })}
    //                 </Grid>
    //                 <Grid item xs={10} container direction="row" wrap="wrap" className={classes.leftMenuGrid}>
    //                     {
    //                         filterSecondmenu && filterSecondmenu.length > 0 ? filterSecondmenu.map((fm) => {
    //                             return (
    //                                 <Grid item >
    //                                     <ul className={classes.SubmenuTitle}>{fm.educationSubject_Name}</ul>
    //                                     {allmenu.map((all) => {
    //                                         if (all.educationSubject_EducationSubject_Ref === fm.educationSubject_ID) {
    //                                             return <li className={classes.Submenu}>{all.educationSubject_Name}</li>
    //                                         }
    //                                     })
    //                                     }
    //                                 </Grid>
    //                             )
    //                         }) : null
    //                     }
    //                 </Grid>
    //             </Grid>
    //         </Fade>
    //     </Grid>
    // )
}
