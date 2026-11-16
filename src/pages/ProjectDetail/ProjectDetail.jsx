import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/ProjectsData.js';

export default function ProjectDetail() {
  const { id } = useParams();
  // Confronto sicuro (gestisce sia id numerici che stringhe)
  const progetto = projects.find((p) => String(p.id) === String(id));
  
  const [activeIndex, setActiveIndex] = useState(0);

  if (!progetto) {
    return (
      <div className="container py-5 text-center bg-atelier min-vh-60">
        <h2 className="h4 mb-3 font-serif">Progetto non trovato</h2>
        <Link to="/portfolio" className="btn btn-dark">← Torna al Portfolio</Link>
      </div>
    );
  }

  const images = progetto.images || [];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-atelier min-vh-100">
      
      {/* Header Dettaglio */}
      <section className="py-5 container">
        <div className="row">
          <div className="col-12">
            <span className="text-uppercase fs-6 fw-semibold d-block mb-2 text-amber letter-spacing-2">
              {progetto.category}
            </span>
            <h1 className="display-4 fw-normal mb-0 font-serif text-dark">
              {progetto.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Contenuto & Galleria Carosello */}
      <section className="pb-5 border-top border-atelier">
        <div className="container py-5">
          <div className="row g-5">
            
            {/* Carosello Immagini (Colonna Sinistra) */}
            <div className="col-lg-7">
              {images.length > 0 ? (
                <div>
                  {/* Contenitore Principale Carosello */}
                  <div className="carousel slide rounded-3 overflow-hidden border border-atelier shadow-sm position-relative bg-white">
                    
                    <div className="carousel-inner">
                      {images.map((imgUrl, index) => (
                        <div 
                          key={index} 
                          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        >
                          <div className="ratio ratio-16x9">
                            <img 
                              src={imgUrl} 
                              alt={`${progetto.title} - Foto ${index + 1}`} 
                              className="w-100 h-100 object-fit-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Controlli Frecce (mostrati solo se ci sono più immagini) */}
                    {images.length > 1 && (
                      <>
                        <button 
                          className="carousel-control-prev" 
                          type="button" 
                          onClick={handlePrev}
                          aria-label="Precedente"
                        >
                          <span 
                            className="carousel-control-prev-icon bg-dark bg-opacity-75 rounded-circle p-3" 
                            aria-hidden="true"
                          ></span>
                        </button>
                        <button 
                          className="carousel-control-next" 
                          type="button" 
                          onClick={handleNext}
                          aria-label="Successiva"
                        >
                          <span 
                            className="carousel-control-next-icon bg-dark bg-opacity-75 rounded-circle p-3" 
                            aria-hidden="true"
                          ></span>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Barra Miniature (Thumbnails) sotto al carosello */}
                  {images.length > 1 && (
                    <div className="d-flex gap-2 mt-3 overflow-auto pb-2">
                      {images.map((imgUrl, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`p-0 border rounded-2 overflow-hidden flex-shrink-0 transition-all ${
                            index === activeIndex 
                              ? 'border-dark border-2 opacity-100 shadow-sm' 
                              : 'border-atelier opacity-50'
                          }`}
                          style={{ width: '85px', height: '55px', cursor: 'pointer' }}
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Miniatura ${index + 1}`} 
                            className="w-100 h-100 object-fit-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="ratio ratio-16x9 rounded-3 border border-atelier d-flex align-items-center justify-content-center bg-white">
                  <span className="text-muted small text-uppercase letter-spacing-1">
                    Nessuna immagine disponibile
                  </span>
                </div>
              )}
            </div>

            {/* Scheda Informazioni (Colonna Destra) */}
            <div className="col-lg-5">
              <div className="p-4 box-atelier shadow-sm sticky-top" style={{ top: '20px' }}>
                <h2 className="h4 mb-3 font-serif text-dark">
                  Il Progetto
                </h2>
                
                <p className="text-muted small mb-4 lh-base text-pre-line">
                  {progetto.description}
                </p>

                {progetto.details && (
                  <div className="pt-3 border-top border-atelier mb-4">
                    <h3 className="h6 text-uppercase fw-bold mb-3 text-amber letter-spacing-1">
                      Caratteristiche & Dettagli
                    </h3>
                    <ul className="list-unstyled text-muted small m-0">
                      {progetto.details.map((item, idx) => (
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

          {/* Pulsante Ritorno al Portfolio in fondo */}
          <div className="mt-5 pt-4 border-top border-atelier text-center">
            <Link to="/portfolio" className="btn btn-outline-dark px-4 py-2 fw-semibold">
              ← Torna al Portfolio
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}