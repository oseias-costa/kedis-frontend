import { ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import Login from './pages/Login'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#FF5F05',
      secondary: '#525252',
    },
    action: {
      active: '#FF5F05',
    },
    primary: {
      main: "#FF5F05"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Login />
      </>
    </ThemeProvider>
  )
}

export default App
