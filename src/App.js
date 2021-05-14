import React from 'react'
import {Navbar} from './pages/index'
import Routes from './Routes'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#fff',
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
