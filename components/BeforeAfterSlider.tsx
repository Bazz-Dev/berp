import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  // Stop dragging if mouse leaves window
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="w-full">
      {/* Labels Header */}
      <div className="flex w-full mb-4 text-white font-bold text-sm uppercase tracking-wider text-center">
        <div className="w-1/2 bg-[#dc2626] py-2 rounded-l-lg">Antes</div>
        <div className="w-1/2 bg-[#22c55e] py-2 rounded-r-lg">Después</div>
      </div>

      {/* Image Area */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-xl shadow-xl cursor-ew-resize select-none group"
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseMove={onMouseMove}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onTouchMove={onTouchMove}
      >
        {/* Right Image (After - Background) */}
        <img 
          src={afterImage} 
          alt={`Después - ${alt}`} 
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" 
        />

        {/* Left Image (Before - Foreground, Clipped) */}
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt={`Antes - ${alt}`} 
            className="absolute top-0 left-0 max-w-none h-full object-cover"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }} 
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 group-hover:text-berp-teal transition-colors border-4 border-gray-100">
            <MoveHorizontal size={20} />
          </div>
        </div>

        {/* Hint Overlay (Fades out on interaction) */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full pointer-events-none transition-opacity duration-500 ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
          Desliza para comparar
        </div>
      </div>
    </div>
  );
};