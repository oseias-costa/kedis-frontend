import { createTheme } from '@mui/material';
import './App.css'
import { Outlet, RouterProvider } from 'react-router-dom';
import LoginTabs from './components/LoginTabs';
import { router } from './routes/RenderRoutes';

export const theme = createTheme({
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
  typography: {
    "fontFamily": 'Kanit'
  }
});

function App() {
  return(
    <RouterProvider router={router}>
      <LoginTabs />
    </RouterProvider>
  )
}

export default App
