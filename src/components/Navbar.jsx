import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-3 border-bottom border-secondary position-relative">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo / Brand */}
        <NavLink className="navbar-brand fw-bold fs-5 text-white d-flex align-items-center gap-2 m-0 text-decoration-none" to="/">
          <span style={{ color: '#d4a373' }}>Logo</span>
          <span>Materia & Luce</span>
        </NavLink>

        {/* --- Voci Desktop --- */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "text-warning fw-bold text-decoration-none fs-6" : "text-light opacity-75 text-decoration-none fs-6"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              isActive ? "text-warning fw-bold text-decoration-none fs-6" : "text-light opacity-75 text-decoration-none fs-6"
            }
          >
            Portfolio
          </NavLink>

          <NavLink 
            to="/contatti" 
            className={({ isActive }) => 
              isActive ? "text-warning fw-bold text-decoration-none fs-6" : "text-light opacity-75 text-decoration-none fs-6"
            }
          >
            Contatti
          </NavLink>
        </div>

        {/* --- MOBILE: Pulsante Hamburger --- */}
        <button 
          className="navbar-toggler border-0 shadow-none px-2 py-1 d-lg-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#smallDropdownMenu"
          aria-controls="smallDropdownMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ transform: 'scale(0.8)' }}></span>
        </button>
      </div>

      {/* --- MOBILE: Tendina --- */}
      <div 
        className="collapse navbar-collapse position-absolute top-100 end-0 me-3 bg-dark border border-secondary rounded-3 shadow-lg px-2 py-3 mt-2 d-lg-none" 
        id="smallDropdownMenu" 
        style={{ width: '130px', zIndex: 1000 }}
      >
        <ul className="navbar-nav gap-2 w-100 align-items-center text-center">
          <li className="nav-item w-100">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link text-warning fw-bold py-1 fs-6 d-block" : "nav-link text-light opacity-75 py-1 fs-6 d-block"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive ? "nav-link text-warning fw-bold py-1 fs-6 d-block" : "nav-link text-light opacity-75 py-1 fs-6 d-block"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink 
              to="/contatti" 
              className={({ isActive }) => 
                isActive ? "nav-link text-warning fw-bold py-1 fs-6 d-block" : "nav-link text-light opacity-75 py-1 fs-6 d-block"
              }
            >
              Contatti
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}