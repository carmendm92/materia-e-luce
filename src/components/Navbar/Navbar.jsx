import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoSrc from '../../assets/logo_due.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-3 border-bottom border-secondary position-relative">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo / Brand */}
        <NavLink 
          className="navbar-brand fw-bold fs-5 d-flex align-items-center gap-2 m-0 text-decoration-none" 
          to="/"
          onClick={handleClose}
        >
          <img
          className={styles.logoImg}
            src={logoSrc} 
            alt="Materia & Luce Logo" 
          />
          <span className="text-light tracking-wide">Materia & Luce</span>
        </NavLink>

        {/* --- Voci Desktop --- */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "text-amber fw-bold text-decoration-none fs-6" : "text-light opacity-75 text-decoration-none fs-6"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              isActive ? "text-amber fw-bold text-decoration-none fs-6" : "text-light opacity-75 text-decoration-none fs-6"
            }
          >
            Portfolio
          </NavLink>

          <NavLink 
            to="/contatti" 
            className={({ isActive }) => 
              isActive ? "text-amber fw-bold text-decoration-none fs-6" : "text-light opacity-75 text-decoration-none fs-6"
            }
          >
            Contatti
          </NavLink>
        </div>

        {/* --- MOBILE: Pulsante Hamburger --- */}
        <button 
          className="navbar-toggler border-0 shadow-none px-2 py-1 d-lg-none" 
          type="button" 
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ transform: 'scale(0.8)' }}></span>
        </button>
      </div>

      {/* --- MOBILE: Tendina --- */}
      {isOpen && (
        <div 
          className="position-absolute top-100 end-0 me-3 bg-dark border border-secondary rounded-3 shadow-lg px-2 py-3 mt-2 d-lg-none" 
          style={{ width: '140px', zIndex: 1000 }}
        >
          <ul className="navbar-nav gap-2 w-100 align-items-center text-center m-0 p-0">
            <li className="nav-item w-100">
              <NavLink 
                to="/" 
                onClick={handleClose}
                className={({ isActive }) => 
                  isActive ? "nav-link text-amber fw-bold py-1 fs-6 d-block" : "nav-link text-light opacity-75 py-1 fs-6 d-block"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink 
                to="/portfolio" 
                onClick={handleClose}
                className={({ isActive }) => 
                  isActive ? "nav-link text-amber fw-bold py-1 fs-6 d-block" : "nav-link text-light opacity-75 py-1 fs-6 d-block"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink 
                to="/contatti" 
                onClick={handleClose}
                className={({ isActive }) => 
                  isActive ? "nav-link text-amber fw-bold py-1 fs-6 d-block" : "nav-link text-light opacity-75 py-1 fs-6 d-block"
                }
              >
                Contatti
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}