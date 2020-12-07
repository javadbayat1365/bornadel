import React, { useContext, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import { Link } from 'react-router-dom';


export default function SecondLevel() {
    const classes = useStyles();
    let { setShowMenu, filterSecondmenu, SecondLevelShow, setSecondLevelShow, setThirdLevelShow,
        ThirdLayer, setSecondHeight } = useContext(MasteLayoutContext)

    return (
        <Grid container direction="column" wrap="nowrap" item className={classes.SecondLayer}
            style={{ display: SecondLevelShow ? "flex" : "none" }}
            onMouseEnter={(e) => {
                setSecondLevelShow(true)
                setSecondHeight(e.target.offsetHeight);
                setShowMenu(true)
            }}
            onMouseLeave={() => {
                setSecondLevelShow(false)
                setThirdLevelShow(false)
                setShowMenu(false)
            }}
        >
            {
                filterSecondmenu && filterSecondmenu.length > 0 ? filterSecondmenu.map((fm, index) => {
                    return (
                        <Grid item container key={index}
                            className={classes.SecondLayercontainer}
                            component={Link} to={`/Courses/${fm.educationSubject_ID}`}
                            onClick={()=>{
                                setShowMenu(false)
                                setSecondLevelShow(false)
                                setThirdLevelShow(false)

                            }}
                            onMouseEnter={(e) => {
                                setThirdLevelShow(true)
                                ThirdLayer(fm.educationSubject_ID)
                                // setSecondLevelShow(true)
                            }}
                        >
                            <Typography className={classes.MenuItemText}>{fm.educationSubject_Name}</Typography>
                            <span className={classes.arrowMenuItem}></span>
                        </Grid>
                    )
                }) : null}
        </Grid>
    )
}
