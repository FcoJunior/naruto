import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import AppRoutes from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
