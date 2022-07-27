import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './components/item/Menu'
import Buttons from './components/item/Buttons'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu />
    <Buttons />
    <Home />
  </React.StrictMode>
)
