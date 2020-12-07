import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'
let theme = createMuiTheme({
  palette: palette,
  direction: 'rtl',
  spacing:2,
  typography: {
    h2: {
      fontSize: 35,
      fontWeight: 'bold',
      lineHeight: 1.69,
      textAlign: 'left',
    },
    h3: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.69,
      textAlign: 'left',
    },
    h4: {
      fontSize: 12,
      fontWeight: '300',
      lineHeight: 4.3,
      textAlign: 'left',
      color:'white',

    },
    h5: {
      fontSize: 12,
      fontWeight: '300',
      lineHeight: 2.9,
      color:'white'
    },
    h6: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.67,
      textAlign: 'left',
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
      marginTop: 0,
    },
    subtitle2: {
      fontSize: 11,
      fontWeight: 'normal',
      lineHeight: 2.14,
      textAlign: 'left',
    },
    body1: {
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
    },
    body2: {
      fontSize: 11,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
    },
    button: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 2.75,
      textAlign: 'center',
      borderRadius: 20,
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 2.31,
      textAlign: 'left',
    },
    allVariants: {
      fontFamily: 'Yekan',
    },
  },
})
export default responsiveFontSizes(theme)
