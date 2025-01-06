import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "../src/App"
import "./assets/login.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
