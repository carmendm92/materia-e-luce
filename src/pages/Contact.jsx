import { useState } from 'react';

export default function Contatti() {
  const [formData, setFormData] = useState({ nome: '', email: '', messaggio: '' });
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInviato(true);
  };

  return (
    <div className="bg-atelier min-vh-100">
      
      {/* Header Sezione */}
      <section className="py-5 text-center container">
        <div className="row py-lg-4">
          <div className="col-lg-8 col-md-10 mx-auto">
            <span className="text-uppercase fs-6 fw-semibold d-block mb-3 text-amber letter-spacing-3">
              Inizia la Collaborazione
            </span>
            <h1 className="fw-normal display-5 mb-3 font-serif text-dark">
              Richiedi Informazioni o Preventivo
            </h1>
            <p className="lead text-muted">
              Hai un'idea o un disegno che desideri trasformare in realtà? Inviami un messaggio per valutare insieme il tuo progetto.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione Modulo & Recapiti */}
      <section className="pb-5 border-top border-atelier">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            
            {/* Colonna Info */}
            <div className="col-lg-5">
              <div className="p-4 rounded-3 bg-white border border-atelier shadow-sm h-100">
                <h2 className="h4 mb-4 font-serif text-dark">
                  Come Lavoro
                </h2>
                
                <div className="mb-4">
                  <h3 className="h6 text-uppercase fw-bold mb-1 text-amber letter-spacing-1">
                    01. Ascolto & Sopralluogo
                  </h3>
                  <p className="text-muted small m-0">
                    Analisi delle tue idee, misurazione degli spazi e confronto sui materiali ideali per il tuo lavoro.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h6 text-uppercase fw-bold mb-1 text-amber letter-spacing-1">
                    02. Sviluppo Sartoriale
                  </h3>
                  <p className="text-muted small m-0">
                    Realizzazione artigianale curata nei dettagli, con aggiornamenti costanti sullo stato d'avanzamento.
                  </p>
                </div>

                <div className="pt-3 border-top border-atelier">
                  <p className="text-muted small mb-1"><strong>Zona d'Intervento:</strong> Disponibile per interventi e sopralluoghi in zona.</p>
                  <p className="text-muted small m-0"><strong>Email:</strong> info@materiaeluce.it</p>
                </div>
              </div>
            </div>

            {/* Colonna Form Contatti */}
            <div className="col-lg-7">
              <div className="p-4 p-md-5 rounded-3 bg-white border border-atelier shadow-sm">
                {inviato ? (
                  <div className="text-center py-4">
                    <span className="fs-1 d-block mb-3 text-amber">◆</span>
                    <h3 className="h4 mb-2 font-serif">Messaggio Inviato!</h3>
                    <p className="text-muted small">Grazie per avermi contattato. Ti risponderò al più presto per discutere del tuo progetto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label small text-uppercase fw-semibold letter-spacing-1 text-dark">
                        Nome e Cognome
                      </label>
                      <input 
                        type="text" 
                        required
                        className="form-control p-3 bg-light border-0 rounded-3" 
                        placeholder="Inserisci il tuo nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label small text-uppercase fw-semibold letter-spacing-1 text-dark">
                        Email
                      </label>
                      <input 
                        type="email" 
                        required
                        className="form-control p-3 bg-light border-0 rounded-3" 
                        placeholder="nome@esempio.it"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label small text-uppercase fw-semibold letter-spacing-1 text-dark">
                        Descrivi la tua idea
                      </label>
                      <textarea 
                        rows="5" 
                        required
                        className="form-control p-3 bg-light border-0 rounded-3" 
                        placeholder="Raccontami cosa vorresti realizzare (es. struttura in legno, specchio retroilluminato, finiture su misura...)"
                        value={formData.messaggio}
                        onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-atelier-dark btn-lg w-100 fw-semibold shadow-sm">
                      Invia Messaggio
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}