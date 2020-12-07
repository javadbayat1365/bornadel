import React, { useContext, useState } from 'react'
import useStyles from '../../../styles'
import { Grid, Typography } from '@material-ui/core'
import { CoursesContext } from '../../../contexts/CoursesContext'


export default function LeftHeaderFilter() {
    const classes = useStyles()
    const [activeClass, setActiveClass] = useState(1)
    let { cheapest, mostExpensive, newest, setSortType } = useContext(CoursesContext)
    return (
        <Grid container alignItems="center">
            <Grid item className={classes.leftheaderIcon}></Grid>
            <Grid item ><Typography className={classes.leftheaderTitle}>مرتب سازی براساس :</Typography></Grid>
            <Grid item onClick={() => {
                setSortType(1)
                setActiveClass(1)
            }
            }><Typography className={activeClass === 1 ? classes.activeFilterHeaderLeft : classes.leftheaderText}>پربازدیدترین</Typography></Grid>
            <Grid item onClick={() => {
                setSortType(2)
                setActiveClass(2)
            }
            }><Typography className={activeClass === 2 ? classes.activeFilterHeaderLeft : classes.leftheaderText}>پرفروش ترین</Typography></Grid>
            <Grid item onClick={() => {
                setSortType(3)
                setActiveClass(3)
            }
            }><Typography className={activeClass === 3 ? classes.activeFilterHeaderLeft : classes.leftheaderText}>جدیدترین</Typography></Grid>
            <Grid item onClick={() => {
                setSortType(4)
                setActiveClass(4)
            }
            }><Typography className={activeClass === 4 ? classes.activeFilterHeaderLeft : classes.leftheaderText}>ارزان ترین</Typography></Grid>
            <Grid item onClick={() => {
                setSortType(5)
                setActiveClass(5)
            }
            }><Typography className={activeClass === 5 ? classes.activeFilterHeaderLeft : classes.leftheaderText}>گران ترین</Typography></Grid>
        </Grid>
    )
}
