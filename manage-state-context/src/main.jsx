import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProcutContextProvider from './context/product/ProcutContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProcutContextProvider>
    <App />
  </ProcutContextProvider>
)
