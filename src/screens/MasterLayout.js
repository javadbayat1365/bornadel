import React from 'react';
import Index from '../routes'
import { Grid, Hidden, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import useStyles from '../styles'
import Header from '../components/Header'
import MasteLayoutContextProvider from '../contexts/MasteLayoutContext'
import AcademyPanelContextProvider from '../contexts/AcademyPanelContext'
import Footer from '../components/Footer'

export default function MasterLayout() {
  const classes = useStyles();

  return (
    <AcademyPanelContextProvider>
      <MasteLayoutContextProvider>
        <Grid container direction="column">
          <Header />
          <main className={classes.main} >
            <Grid container justify="center" className={classes.Insidermain}>
              <Index />
            </Grid>
          </main>
          <Footer />
        </Grid>
      </MasteLayoutContextProvider>
    </AcademyPanelContextProvider>
  )




} 