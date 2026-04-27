import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Univers from './pages/Univers'
import Carte from './pages/Carte'
import Reservation from './pages/Reservation'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Univers />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  )
}
