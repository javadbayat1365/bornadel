import React, { useContext, useEffect } from 'react'
import { Fade, Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import { Link } from 'react-router-dom';

export default function FirstLevel() {
    const classes = useStyles();
    let { showMenu, setShowMenu, HandleExit, firstlayout, SecondLayer, setSecondLevelShow } = useContext(MasteLayoutContext)

    return (
        <Grid style={{ display: showMenu ? "flex" : "none" }}
            onMouseEnter={(e) => {
                setShowMenu(true)
            }}
            onMouseLeave={() => { HandleExit() }}>
            <Grid item container onMouseEnter={(e) => {
            }}
                direction="column" alignItems="center" className={`${classes.rightMenuGrid} firstLevelHeight`}>
                {firstlayout.map((item,index) => {
                    return (
                        <Grid container key={index} >
                            <Grid container item
                                justify="flex-start"
                                alignItems="center"
                                className={classes.MenuItem}
                                component={Link} to={`/Courses/${item.educationSubject_ID}`}
                                onClick={()=>{
                                    setShowMenu(false)
                                    setSecondLevelShow(false)
                                }}
                                onMouseEnter={(e) => {
                                    SecondLayer(item.educationSubject_ID)
                                    setSecondLevelShow(true)
                                }}
                                onMouseLeave={() => { setSecondLevelShow(false) }}
                            >
                                <img className={classes.MenuItemLogo} src={item.educationSubject_IconeLink} />
                                <Typography className={classes.MenuItemText}>{item.educationSubject_Name}</Typography>
                                <span className={classes.arrowMenuItem}></span>
                            </Grid>
                        </Grid>
                    )
                })}

            </Grid>
        </Grid>
    )
}
