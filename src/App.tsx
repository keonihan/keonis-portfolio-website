import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Experience from './pages/experience';
import ProjectModal from './pages/ProjectModal';

function App() {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
