import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeUrl?: string;
  videoSrc?: string;
  title: string;
  startTime?: number;
  aspectRatio?: 'horizontal' | 'vertical';
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  youtubeUrl,
  videoSrc,
  title,
  startTime,
  aspectRatio
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || (!youtubeUrl && !videoSrc)) return null;

  // Extract YouTube Video ID, start time, and force 1080p
  const getEmbedUrl = (url?: string, explicitStartTime?: number) => {
    if (!url) return '';
    try {
      let videoId = '';
      let startSeconds = explicitStartTime || 0;

      if (url.includes('youtube.com/shorts/')) {
        const parts = url.split('youtube.com/shorts/')[1].split('?');
        videoId = parts[0];
        if (parts[1] && !startSeconds) {
          const params = new URLSearchParams(parts[1]);
          const tParam = params.get('t') || params.get('start');
          if (tParam) {
            startSeconds = parseInt(tParam.replace('s', ''), 10) || 0;
          }
        }
      } else if (url.includes('youtube.com/watch')) {
        const urlObj = new URL(url);
        videoId = urlObj.searchParams.get('v') || '';
        const tParam = urlObj.searchParams.get('t') || urlObj.searchParams.get('start');
        if (tParam && !startSeconds) {
          startSeconds = parseInt(tParam.replace('s', ''), 10) || 0;
        }
      } else if (url.includes('youtu.be/')) {
        const parts = url.split('youtu.be/')[1].split('?');
        videoId = parts[0];
        if (parts[1] && !startSeconds) {
          const params = new URLSearchParams(parts[1]);
          const tParam = params.get('t') || params.get('start');
          if (tParam) {
            startSeconds = parseInt(tParam.replace('s', ''), 10) || 0;
          }
        }
      }

      if (!videoId) return '';

      // Force 1080p via vq=hd1080 & hd=1, autoplay, and start offset
      let embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080&hd=1&rel=0`;
      if (startSeconds > 0) {
        embedUrl += `&start=${startSeconds}`;
      }
      return embedUrl;
    } catch {
      return '';
    }
  };

  const isVertical = aspectRatio === 'vertical' || (youtubeUrl ? youtubeUrl.includes('/shorts/') : false);
  const embedUrl = youtubeUrl ? getEmbedUrl(youtubeUrl, startTime) : '';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className={`relative w-full ${isVertical ? 'max-w-sm sm:max-w-md' : 'max-w-4xl'} bg-navy-900 border border-blue-500/30 rounded-md overflow-hidden shadow-2xl shadow-black/80 flex flex-col max-h-[92vh] transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-blue-500/15 bg-navy-950/90 shrink-0">
          <div className="flex items-center gap-2 max-w-[85%]">
            <h3 className="font-bold text-sm text-white truncate">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-navy-800 transition-colors cursor-pointer"
            aria-label="Close video modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Container (handles both 16:9 YouTube, 9:16 Shorts, and local MP4s) */}
        <div className="relative w-full bg-black flex items-center justify-center overflow-hidden flex-grow">
          {youtubeUrl ? (
            <div className={`w-full ${isVertical ? 'aspect-[9/16] max-h-[78vh]' : 'aspect-video'}`}>
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                  Unable to load video.
                </div>
              )}
            </div>
          ) : videoSrc ? (
            <video
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="max-h-[78vh] max-w-full w-auto h-auto object-contain mx-auto"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex items-center justify-center py-20 text-slate-400 text-sm">
              No video available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
