import { Link } from 'react-router-dom';
import { progetti } from '../data/progetti';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <div className="bg-atelier min-vh-100">
      
      {/* Header Sezione */}
      <section className="py-5 text-center container">
        <div className="row py-lg-4">
          <div className="col-lg-8 col-md-10 mx-auto">
            <span className="text-uppercase fs-6 fw-semibold d-block mb-3 text-amber letter-spacing-3">
              Selezione di Progetti
            </span>
            <h1 className="fw-normal display-5 mb-3 font-serif text-dark">
              Il Portfolio
            </h1>
            <p className="lead text-muted">
              Soluzioni in legno su misura e finiture di pregio: una galleria di opere pensate e realizzate per vivere al meglio gli spazi.
            </p>
          </div>
        </div>
      </section>

      {/* Griglia Dinamica */}
      <section className="pb-5 border-top border-atelier">
        <div className="container py-5">
          <div className="row g-4">
            {progetti.map((p) => (
              <div key={p.id} className="col-md-6 col-lg-4">
                <ProjectCard progetto={p} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5 pt-4">
            <p className="text-muted mb-3">Hai in mente un progetto particolare per la tua casa?</p>
            <Link to="/contatti" className="btn btn-atelier-dark btn-lg px-4 fw-semibold shadow-sm">
              Parlami del tuo Progetto
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}