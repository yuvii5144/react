import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ✅ ADD THIS
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)