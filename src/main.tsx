import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

let id = document.getElementById('root') as HTMLElement;
let root = ReactDOM.createRoot(id)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
