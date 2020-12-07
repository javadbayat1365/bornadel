import React, { useContext, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import { Link } from 'react-router-dom';


export default function ThirdLevel() {
    const classes = useStyles();
    let { setShowMenu, setSecondLevelShow, ThirdLevelShow, setThirdLevelShow,
        secondHeight, filterThirdmenu } = useContext(MasteLayoutContext)

    return (
        <Grid container direction="column" className={classes.thirdLayer}
            style={{
                minHeight: secondHeight, display: ThirdLevelShow ? "flex" : "none",
                maxWidth: filterThirdmenu.length > 35 ? window.innerWidth - 440 :
                    filterThirdmenu.length < 36 && filterThirdmenu.length > 25 ? window.innerWidth - 600 :
                        filterThirdmenu.length < 13 ? 450 : 600
            }}
            onMouseEnter={() => {
                setThirdLevelShow(true)
                setSecondLevelShow(true)
                setShowMenu(true)

            }}
            onMouseLeave={() => {
                setThirdLevelShow(false)
                setSecondLevelShow(false)
                setShowMenu(false)


            }}
        >
            {
                filterThirdmenu && filterThirdmenu.length > 0 ? filterThirdmenu.map((tm, index) => {
                    return (
                        <Grid item className={classes.thirdLayercontainer} key={index}
                            component={Link} to={`/Courses/${tm.educationSubject_ID}`}
                            onClick={() => {
                                setThirdLevelShow(false)
                                setSecondLevelShow(false)
                                setShowMenu(false)
                            }}
                        >
                            <Typography >{tm.educationSubject_Name}</Typography>
                            {/* <span className={classes.arrowMenuItem}></span> */}
                        </Grid>
                    )
                }) : null
            }
        </Grid>
    )
}
