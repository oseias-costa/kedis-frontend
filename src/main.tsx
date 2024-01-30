import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { theme } from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
)
