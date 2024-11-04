import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fetchdata from './Components/Fetchdata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fetchdata />
  </StrictMode>,
)
