import { Link } from 'react-router-dom';

export default function ProjectCard({ progetto }) {
  return (
    <div className="card-atelier h-100 d-flex flex-column justify-content-between">
      
      {/* Anteprima Immagine */}
      <div className="ratio ratio-16x9 card-img-wrapper d-flex align-items-center justify-content-center">
        {progetto.immagini && progetto.immagini[0] ? (
          <img 
            src={progetto.immagini[0]} 
            alt={progetto.titolo} 
            className="w-100 h-100 object-fit-cover" 
          />
        ) : (
          <span className="small text-uppercase text-muted letter-spacing-1">
            {progetto.categoria}
          </span>
        )}
      </div>

      {/* Corpo Card */}
      <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
        <div>
          <span className="text-uppercase small fw-semibold d-block mb-2 text-amber letter-spacing-1">
            {progetto.categoria}
          </span>
          <h3 className="h4 card-title mb-3 font-serif text-dark">
            {progetto.titolo}
          </h3>
          <p className="text-muted small mb-4">
            {progetto.sintesi}
          </p>
        </div>

        <div>
          {/* Tag */}
          <div className="d-flex flex-wrap gap-2 pt-2 border-top border-atelier mb-3">
            {progetto.tag && progetto.tag.map((t, idx) => (
              <span key={idx} className="badge badge-atelier px-2 py-1">
                {t}
              </span>
            ))}
          </div>

          <Link to={`/portfolio/${progetto.id}`} className="btn btn-outline-dark w-100 fw-semibold btn-sm py-2">
            Vedi Progetto →
          </Link>
        </div>
      </div>

    </div>
  );
}