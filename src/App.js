import React from 'react'
import Rtl from './components/RTL'
import ThemeProvider from './components/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import MasterLayout from './screens/MasterLayout'
import AlertContextProvider from './contexts/AlertContext'
import CoursesContextProvider from './contexts/CoursesContext'
import HomePageContextProvider from './contexts/HomePageContext'
import CourseDetailContextProvider from './contexts/CourseDetailContext'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Rtl>
          <AlertContextProvider>
            <CoursesContextProvider>
              <HomePageContextProvider>
                <CourseDetailContextProvider>
                  <CssBaseline />
                  <MasterLayout />
                </CourseDetailContextProvider>
              </HomePageContextProvider>
            </CoursesContextProvider>
          </AlertContextProvider>
        </Rtl>
      </ThemeProvider>
    </BrowserRouter>
  );
}
