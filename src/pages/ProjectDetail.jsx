import { useParams, Link } from 'react-router-dom';
import { progetti } from '../data/progetti';

export default function ProjectDetail() {
  const { id } = useParams();
  const progetto = progetti.find((p) => p.id === id);

  if (!progetto) {
    return (
      <div className="container py-5 text-center bg-atelier min-vh-60">
        <h2 className="h4 mb-3 font-serif">Progetto non trovato</h2>
        <Link to="/portfolio" className="btn btn-dark">← Torna al Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="bg-atelier min-vh-100">
      
      {/* Header Dettaglio */}
      <section className="py-5 container">
        <Link to="/portfolio" className="text-decoration-none text-muted small fw-semibold d-inline-block mb-4">
          ← TORNA AL PORTFOLIO
        </Link>
        
        <div className="row">
          <div className="col-lg-8">
            <span className="text-uppercase fs-6 fw-semibold d-block mb-2 text-amber letter-spacing-2">
              {progetto.categoria}
            </span>
            <h1 className="display-4 fw-normal mb-4 font-serif text-dark">
              {progetto.titolo}
            </h1>
          </div>
        </div>
      </section>

      {/* Contenuto & Galleria */}
      <section className="pb-5 border-top border-atelier">
        <div className="container py-5">
          <div className="row g-5">
            
            {/* Galleria Immagini */}
            <div className="col-lg-7">
              <div className="d-flex flex-column gap-4">
                {progetto.immagini && progetto.immagini.map((imgUrl, index) => (
                  <div key={index} className="rounded-3 overflow-hidden border border-atelier shadow-sm">
                    <img 
                      src={imgUrl} 
                      alt={`${progetto.titolo} - Foto ${index + 1}`} 
                      className="w-100 h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Scheda Informazioni */}
            <div className="col-lg-5">
              <div className="p-4 box-atelier shadow-sm sticky-top" style={{ top: '20px' }}>
                <h2 className="h4 mb-3 font-serif text-dark">
                  Il Progetto
                </h2>
                
                <p className="text-muted small mb-4 lh-base text-pre-line">
                  {progetto.descrizioneCompleta}
                </p>

                {progetto.dettagliTecnici && (
                  <div className="pt-3 border-top border-atelier mb-4">
                    <h3 className="h6 text-uppercase fw-bold mb-3 text-amber letter-spacing-1">
                      Caratteristiche & Dettagli
                    </h3>
                    <ul className="list-unstyled text-muted small m-0">
                      {progetto.dettagliTecnici.map((item, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-center gap-2">
                          <span className="text-amber">◆</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-3 border-top border-atelier">
                  <Link to="/contatti" className="btn btn-atelier-dark w-100 fw-semibold py-2">
                    Richiedi un Lavoro Simile
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}