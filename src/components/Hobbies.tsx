import React, { useState } from 'react';
import { Palette, Youtube, Music, Heart } from 'lucide-react';
import graphicDesignData from '../data/graphic_design_projects.json';
import hobbiesData from '../data/hobbies.json';
import { GraphicDesignProjectItem, HobbyItem } from '../types';
import { ProjectImageGallery } from './ProjectImageGallery';

export const Hobbies: React.FC = () => {
  const [subTab, setSubTab] = useState<'design' | 'personal'>('design');

  const designProjects = graphicDesignData.projects as GraphicDesignProjectItem[];
  const personalHobbies = hobbiesData.hobbies as HobbyItem[];

  return (
    <div className="min-h-[82vh] py-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
            Creative & Personal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Hobbies & Graphic Design
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Concert stage backdrops, motion graphics, audio visualizers, and personal hobbies outside of code.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 flex-wrap">
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

        {subTab === 'design' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {designProjects.map((item) => (
              <article 
                key={item.id} 
                className="p-6 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200 flex flex-col"
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
                      <a
                        href={item.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-500/30 hover:border-red-400 transition-colors"
                        title="Watch on YouTube"
                        aria-label={`Watch ${item.title} on YouTube`}
                      >
                        <Youtube size={14} className="text-red-400" /> YouTube
                      </a>
                    )}
                    {item.spotify && (
                      <a
                        href={item.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 transition-colors"
                        title="Open on Spotify"
                        aria-label={`Open ${item.title} on Spotify`}
                      >
                        <Music size={13} className="text-emerald-400" /> Spotify
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
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
        ) : (
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
