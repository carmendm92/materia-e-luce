import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contatti from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}