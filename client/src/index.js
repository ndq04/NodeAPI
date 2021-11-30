import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import StatusContextProvider from './contexts/StatusContext'

ReactDOM.render(
  <React.StrictMode>
    <StatusContextProvider>
      <App />
    </StatusContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
