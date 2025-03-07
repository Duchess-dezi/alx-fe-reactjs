import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import RegistrationForm from './components/RegistrationForm'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RegistrationForm />
  </StrictMode>,
)
