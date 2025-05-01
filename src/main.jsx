import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Components
import App from './App.jsx'
import PlaceCardDetails from './PlaceCardDetails.jsx'

// React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Page  */}
        <Route path="/" element={<App/>} />
        {/* Route to detail page for places */}
        <Route path="/places/:id" element={<PlaceCardDetails/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
