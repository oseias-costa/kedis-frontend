import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { theme } from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
      <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
     </Provider>
  </React.StrictMode>,
)
