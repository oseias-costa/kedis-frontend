import { createTheme } from '@mui/material';
import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { httpClient } from './utils/httpClient';
import { fecthUser } from './redux/user.slice';
import Load from './components/Load';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/RenderRoutes';

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: '#181B1E',
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
  const [load, setLoad] = useState(true)
  const dispatch = useDispatch()
  const token = localStorage.getItem("kedisToken")
  const user = useSelector((user: RootState) => user.user.user)

  useEffect(() => {
      if(!user.id && token){
          httpClient("/user", "GET")
          .then((res) => {
            console.log(res)
            dispatch(fecthUser(res.data))
            setLoad(false)
          }).catch(() => {
            localStorage.removeItem("kedisToken")
            setLoad(false)})
      } else {
        setTimeout(() => setLoad(false), 2000)
      }
  }, [])

  if(user.id === "" && token) {
    return <Load load={load} />
  }

  return <RouterProvider router={router} /> 
  }

export default App
