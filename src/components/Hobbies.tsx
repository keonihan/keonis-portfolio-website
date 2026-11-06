import React, { useState } from 'react';
import { Palette, Music, Heart, Play, Film, MapPin } from 'lucide-react';
import graphicDesignData from '../data/graphic_design_projects.json';
import hobbiesData from '../data/hobbies.json';
import videoEditsData from '../data/video_edits.json';
import { GraphicDesignProjectItem, HobbyItem, VideoEditItem } from '../types';
import { ProjectImageGallery } from './ProjectImageGallery';
import { VideoModal } from './VideoModal';

export const Hobbies: React.FC = () => {
  const [subTab, setSubTab] = useState<'video' | 'design' | 'personal'>('video');
  const [activeVideo, setActiveVideo] = useState<{ 
    url?: string; 
    videoSrc?: string; 
    title: string; 
    startTime?: number;
    aspectRatio?: 'horizontal' | 'vertical';
  } | null>(null);

  const videoEdits = (videoEditsData.edits || []) as VideoEditItem[];
  const designProjects = graphicDesignData.projects as GraphicDesignProjectItem[];
  const personalHobbies = hobbiesData.hobbies as HobbyItem[];

  const resolveVideoUrl = (videoName?: string) => {
    if (!videoName) return undefined;
    if (videoName.startsWith('/') || videoName.startsWith('http')) return videoName;
    const nameWithExt = videoName.endsWith('.mp4') ? videoName : `${videoName}.mp4`;
    return `/videos/projects/${nameWithExt}`;
  };

  const handleDesignCardClick = (item: GraphicDesignProjectItem) => {
    const videoFile = resolveVideoUrl(item.video);
    if (item.youtube) {
      setActiveVideo({ url: item.youtube, title: item.title, startTime: item.start_time, aspectRatio: 'horizontal' });
    } else if (videoFile) {
      setActiveVideo({ videoSrc: videoFile, title: item.title, aspectRatio: 'horizontal' });
    } else if (item.spotify) {
      window.open(item.spotify, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-[82vh] py-12 pb-20">
      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          youtubeUrl={activeVideo.url}
          videoSrc={activeVideo.videoSrc}
          title={activeVideo.title}
          startTime={activeVideo.startTime}
          aspectRatio={activeVideo.aspectRatio}
        />
      )}

      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
            Creative & Personal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Hobbies & Creative Works
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Travel video edits, concert motion graphics, audio visualizers, and personal hobbies outside of code.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all cursor-pointer ${
              subTab === 'video'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                : 'bg-[#0a1324]/80 text-slate-300 hover:text-white border border-blue-500/15 hover:border-blue-500/30'
            }`}
            onClick={() => setSubTab('video')}
          >
            <Film size={16} /> Video Editing ({videoEdits.length})
          </button>
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all cursor-pointer ${
              subTab === 'design'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                : 'bg-[#0a1324]/80 text-slate-300 hover:text-white border border-blue-500/15 hover:border-blue-500/30'
            }`}
            onClick={() => setSubTab('design')}
          >
            <Palette size={16} /> Graphic Design Projects ({designProjects.length})
          </button>
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all cursor-pointer ${
              subTab === 'personal'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                : 'bg-[#0a1324]/80 text-slate-300 hover:text-white border border-blue-500/15 hover:border-blue-500/30'
            }`}
            onClick={() => setSubTab('personal')}
          >
            <Heart size={16} /> Personal Hobbies ({personalHobbies.length})
          </button>
        </div>

        {/* Video Editing Tab */}
        {subTab === 'video' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {videoEdits.map((item) => (
              <article
                key={item.id}
                onClick={() => setActiveVideo({ url: item.youtube, title: item.title, aspectRatio: item.orientation })}
                className="group relative bg-[#0a1324]/85 hover:bg-[#101c36]/95 border border-blue-500/15 hover:border-blue-500/50 rounded-md overflow-hidden transition-all duration-200 cursor-pointer flex flex-col shadow-lg shadow-black/40 hover:-translate-y-0.5"
              >
                <div className={`relative w-full ${item.orientation === 'vertical' ? 'aspect-[9/16] max-h-[460px]' : 'aspect-video'} overflow-hidden bg-black`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-900/50 transform group-hover:scale-110 transition-transform">
                      <Play size={20} className="fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-blue-400 font-semibold">
                        <MapPin size={12} /> {item.location}
                      </span>
                    )}
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>
                  )}
                  <div className="pt-3 border-t border-blue-500/15 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5 group-hover:text-white transition-colors">
                      <Play size={12} className="text-red-400 fill-current" /> Watch Video
                    </span>
                    <span className="text-[10px] font-mono text-blue-400/80">YouTube</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Graphic Design Projects Tab */}
        {subTab === 'design' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {designProjects.map((item) => (
              <article 
                key={item.id} 
                onClick={() => handleDesignCardClick(item)}
                className="p-6 bg-[#0a1324]/85 hover:bg-[#101c36]/95 border border-blue-500/15 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 rounded-md backdrop-blur-md transition-all duration-200 flex flex-col cursor-pointer group hover:-translate-y-0.5"
              >
                <ProjectImageGallery
                  images={item.images}
                  singleImage={item.image}
                  title={item.title}
                />

                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-mono text-slate-400">{item.date}</span>
                  <div className="flex gap-2">
                    {item.youtube && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-red-950/70 group-hover:bg-red-900 text-red-300 border border-red-500/30 group-hover:border-red-400 transition-colors"
                        title="Watch video in popup"
                      >
                        <Play size={12} className="fill-current text-red-400" /> Watch Video
                      </span>
                    )}
                    {item.spotify && (
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded bg-emerald-950/60 group-hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 group-hover:border-emerald-400 transition-colors"
                        title="Open on Spotify"
                      >
                        <Music size={13} className="text-emerald-400" /> Spotify
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{item.description}</p>
                ) : (
                  <p className="text-slate-400 text-sm italic mb-4 flex-grow">Design & motion asset for DJAL brand presence.</p>
                )}

                {item.video && (
                  <div className="pt-3 border-t border-blue-500/15 text-xs text-slate-400 font-mono">
                    Asset: <span className="text-blue-300">{item.video}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Personal Hobbies Tab */}
        {subTab === 'personal' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {personalHobbies.map((hobby) => (
              <div 
                key={hobby.id} 
                className="p-4 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200 flex items-center gap-3.5"
              >
                {hobby.image && (
                  <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 border border-blue-500/20">
                    <img
                      src={hobby.image}
                      alt={hobby.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {!hobby.image && <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>}
                    <span className="font-semibold text-white text-sm truncate">{hobby.name}</span>
                  </div>
                  {hobby.category && (
                    <span className="text-xs text-slate-400 font-mono mt-0.5 block">{hobby.category}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
