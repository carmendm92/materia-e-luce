import { useState, useRef } from 'react';
import styles from './LightSlider.module.css';

export default function LightSlider({ imgSpenta, imgAccesa, alt = "Confronto luce" }) {
  const [sliderPos, setSliderPos] = useState(50); // Parte al 50% (metà e metà)
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calcola la percentuale rispetto alla larghezza del contenitore
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPos(percentage);
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.sliderContainer} rounded-4 shadow-sm border border-atelier`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Immagine di base (Luce Spenta - a destra) */}
      <img
        src={imgSpenta}
        alt={`${alt} - Luce spenta`}
        className={styles.sliderImg}
        draggable="false"
      />

      {/* Immagine sovrapposta ritagliata con clip-path (Luce Accesa - a sinistra) */}
      <div
        className={styles.overlayWrapper}
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={imgAccesa}
          alt={`${alt} - Luce accesa`}
          className={styles.sliderImg}
          draggable="false"
        />
      </div>

      {/* Linea divisoria verticale e maniglia */}
      <div className={styles.dividerLine} style={{ left: `${sliderPos}%` }}>
        <div className={styles.handle}>
          <span>↔</span>
        </div>
      </div>
    </div>
  );
}