import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-atelier text-dark min-vh-100">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            
            <span className="text-uppercase fs-6 fw-semibold d-block mb-3 text-amber letter-spacing-3">
              Falegnameria & Design su Misura
            </span>

            <h1 className="fw-normal display-4 mb-4 font-serif text-dark">
              Dall'idea alla materia
            </h1>

            <p className="lead text-muted my-4">
              Tu immagini e progetti. Io metto la manualità, la passione per il legno e la competenza sartoriale per trasformare ogni tua visione in realtà.
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <Link to="/portfolio" className="btn btn-atelier-dark btn-lg px-4 fw-semibold shadow-sm">
                Guarda i Lavori
              </Link>
              <Link to="/contatti" className="btn btn-outline-dark btn-lg px-4">
                Contattami
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. SEZIONE CONCEPT --- */}
      <section className="py-5 border-top border-atelier">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-lg-start text-center">
              <h2 className="h3 fw-normal mb-3 font-serif text-dark">
                Opere uniche, pensate per i tuoi spazi
              </h2>
              <p className="text-muted">
                Ogni ambiente richiede soluzioni che i prodotti in serie non possono offrire. Uniamo la lavorazione artigianale del legno a un'attenta cura dei dettagli e della luce, creando atmosfere armoniose e curate in ogni singolo aspetto.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="p-4 border border-atelier rounded-3 text-center shadow-sm bg-white">
                <span className="display-4 d-block mb-2 text-amber">◆</span>
                <h3 className="h5 mb-2 text-dark">Artigianato & Versatilità</h3>
                <p className="text-muted small m-0">Competenza trasversale e flessibilità tecnica per seguire ogni fase del progetto con la massima precisione.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. COSA FACCIAMO --- */}
      <section className="py-5 border-top border-atelier">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="h3 fw-normal font-serif text-dark">Ambiti d'Intervento</h2>
            <p className="text-muted">Dal legno agli spazi da vivere</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border border-atelier rounded-3 h-100 bg-white shadow-sm text-start">
                <h3 className="h5 mb-3 text-amber">01. Opere in Legno</h3>
                <p className="text-muted small">
                  Creazione di strutture, elementi d'arredo e manufatti in legno realizzati su misura con cura artigianale ed eleganza senza tempo.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border border-atelier rounded-3 h-100 bg-white shadow-sm text-start">
                <h3 className="h5 mb-3 text-amber">02. Luce & Finiture</h3>
                <p className="text-muted small">
                  Integrazione di sistemi luminosi e abbinamenti materici studiati per valorizzare i volumi e dare personalità a ogni ambiente.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border border-atelier rounded-3 h-100 bg-white shadow-sm text-start">
                <h3 className="h5 mb-3 text-amber">03. Versatilità Tecnica</h3>
                <p className="text-muted small">
                  Una solida competenza trasversale che permette di gestire interventi complementari e finiture con un unico referente di fiducia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}