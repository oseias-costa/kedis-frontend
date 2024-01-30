import { ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import LoginTabs from './components/LoginTabs';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#F2F2F0',
      secondary: '#F2F2F0',
    },
    action: {
      active: '#524E4E',
    },
    primary: {
      main: "#F2F2F0"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <Login /> */}
        <LoginTabs />
      </>
    </ThemeProvider>
  )
}

export default App
