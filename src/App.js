import React from 'react'
import {Navbar} from './pages/index'
import Routes from './Routes'
import 'nes.css/css/nes.min.css'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF8DC',
      contrastText: '#DEB887',
    },
    secondary: {
      light: '#55dab3',
      main: '#00a883',
      dark: '#007856',
      contrastText: '#000',
    },
  },
})

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App
