import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <-- importa o HashRouter
import App from './App.tsx'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter> {/* <-- envolve o App com HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)
