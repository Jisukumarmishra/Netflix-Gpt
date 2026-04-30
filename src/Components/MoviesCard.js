import React, { useRef, useState } from 'react'
import { IMG_CDN_URL } from 'Utils/constants'

const MoviesCard = ({ posterpath }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  if (!posterpath) return null;

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top; // y position within element
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // tweak the multiplier to change intensity
    const rotateY = ((x - midX) / midX) * 4; // degrees (reduced intensity)
    const rotateX = -((y - midY) / midY) * 4; // degrees (reduced intensity)

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer" style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-black bg-opacity-20 rounded-md overflow-hidden transform-gpu transition-transform duration-500 ease-out"
        style={{ transform }}
      >
        <img className="w-full h-auto block" alt="Movies Card" src={IMG_CDN_URL + posterpath} />
      </div>
    </div>
  );
};

export default MoviesCard;