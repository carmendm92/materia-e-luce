import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ progetto }) {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Se il dispositivo supporta il mouse (hover), non serve l'observer per lo scroll
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!isTouchDevice) return;

    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div ref={cardRef} className={`${styles.cardAtelier} h-100 d-flex flex-column justify-content-between`}>
      
      {/* Anteprima Immagine */}
      <div className={`ratio ratio-16x9 ${styles.cardImgWrapper} overflow-hidden d-flex align-items-center justify-content-center`}>
        {progetto.images && progetto.images[0] ? (
          <img 
            src={progetto.images[0]} 
            alt={progetto.title} 
            className={`w-100 h-100 object-fit-cover transition-transform duration-500 ${styles.cardImg} ${isInView ? styles.inView : ''}`} 
          />
        ) : (
          <span className="small text-uppercase text-muted letter-spacing-1">
            {progetto.category}
          </span>
        )}
      </div>

      {/* Corpo Card */}
      <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
        <div>
          <span className="text-uppercase small fw-semibold d-block mb-2 text-amber letter-spacing-1">
            {progetto.category}
          </span>
          <h3 className="h4 card-title mb-3 font-serif text-dark">
            {progetto.title}
          </h3>
          <p className="text-muted small mb-4">
            {progetto.summary}
          </p>
        </div>

        <div>
          <div className="d-flex flex-wrap gap-2 pt-2 border-top border-atelier mb-3">
            {progetto.tags && progetto.tags.map((t, idx) => (
              <span key={idx} className={`badge ${styles.badgeAtelier} px-2 py-1`}>
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