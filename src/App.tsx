import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DesktopExperience from './pages/desktop/DesktopExperience';


function App() {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
