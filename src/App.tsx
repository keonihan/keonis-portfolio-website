import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DesktopContact from './pages/desktop/DesktopContact';


function App() {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<DesktopContact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
