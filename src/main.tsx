import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './pages/App'
import ArchivePage from './pages/ArchivePage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Analytics />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
