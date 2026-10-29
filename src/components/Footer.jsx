import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-atelier py-5">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between text-center text-md-start">
          
          {/* Logo e Brand */}
          <div className="col-md-4">
            <span className="brand-title d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
              <span className="text-amber">◆</span>
              <span>Materia & Luce</span>
            </span>
            <p className="m-0">
              Falegnameria artigianale e soluzioni d'arredo su misura.
            </p>
          </div>

          {/* Link Rapidi */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center gap-4">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contatti">Contatti</Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-md-end">
            <p className="m-0">
              &copy; {new Date().getFullYear()} Materia & Luce. Tutti i diritti riservati.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}