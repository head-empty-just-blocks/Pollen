import React from 'react'
import {Navbar} from './pages/index'
import Routes from './Routes'

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF8DC',
      contrastText: '#DEB887',
    },
    secondary: {
      light: '#55dab3',
      main: '#D8BFD8',
      dark: '#DEB887',
      contrastText: '#FFF8DC',
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
