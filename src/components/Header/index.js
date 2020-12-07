import React, { useContext, useEffect, useState } from 'react';
import { Grid, Button, Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from '../../styles'
import Menu from '../Menu'
import Drawer from '@material-ui/core/Drawer';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import DrawerInside from './DrawerInside'


export default function Header() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        const container = window !== undefined ? () => window().document.body : undefined;

    }, [])
    return (
        <>
            <Hidden smDown>
                <header className={classes.header} >
                    <Grid container className={classes.Insideheader}>
                        <Grid item container className={classes.headerTop}>
                            <Grid item container className={classes.InsideheaderTop}>
                                <Grid item container alignItems="center" className={classes.headerTopRight} xs={8}>
                                    <Grid item className={classes.Bornadellogo} component={Link} to="/" ></Grid>
                                    <SearchBox />
                                </Grid>
                                <Grid item container className={classes.headerTopLeft} justify="flex-end" xs={4}>
                                    <Button component={Link} to="/login" variant="outlined" className={classes.loginButton}>
                                        <span className={classes.loginIcon}></span>
                                        <span className={classes.loginText1}>ورود</span>
                                        <span className={classes.verticalLineLogin}></span>
                                        <span className={classes.loginText2}>ثبت نام</span>
                                    </Button>
                                    <Button classes={{ outlined: classes.basketIconBtn }} variant="outlined">
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Navbar />
                        <Menu />
                    </Grid>
                </header>
            </Hidden>
            <Hidden mdUp>
                <Grid container className={classes.HeaderMobileSize}>
                    <Drawer
                        container={window.document.body }
                        variant="temporary"
                        // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <DrawerInside />
                    </Drawer>
                </Grid>
            </Hidden>
        </>
    )
}
