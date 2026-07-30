import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';


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
