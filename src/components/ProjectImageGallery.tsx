import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface ProjectImageGalleryProps {
  images?: string[];
  singleImage?: string;
  title: string;
}

export const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({
  images = [],
  singleImage,
  title
}) => {
  const allImages = images.length > 0 ? images : singleImage ? [singleImage] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (allImages.length === 0) {
    return null;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-4">
      <div className="relative w-full h-48 bg-navy-800 rounded border border-blue-500/15 overflow-hidden group">
        <img
          src={allImages[activeIndex]}
          alt={`${title} preview ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded bg-navy-950/80 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur transition-colors opacity-90 hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded bg-navy-950/80 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur transition-colors opacity-90 hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-navy-950/85 backdrop-blur text-white text-[11px] font-mono flex items-center gap-1 border border-white/10">
              <ImageIcon size={11} />
              <span>{activeIndex + 1}/{allImages.length}</span>
            </div>
          </>
        )}
      </div>

      {allImages.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {allImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === activeIndex ? 'bg-blue-400 w-3' : 'bg-slate-600 hover:bg-slate-400'
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveIndex(idx);
              }}
              aria-label={`Jump to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
