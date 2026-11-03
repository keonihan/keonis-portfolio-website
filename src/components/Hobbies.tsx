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
    <div className="page-view">
      <div className="container">
        <div className="page-header">
          <span className="section-tag">Creative & Personal</span>
          <h1 className="page-title">Hobbies & Graphic Design</h1>
          <p className="page-subtitle">
            Concert stage backdrops, motion graphics, audio visualizers, and personal hobbies outside of code.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="experience-tabs">
          <button
            className={`tab-btn ${subTab === 'design' ? 'active' : ''}`}
            onClick={() => setSubTab('design')}
          >
            <Palette size={16} /> Graphic Design Projects ({designProjects.length})
          </button>
          <button
            className={`tab-btn ${subTab === 'personal' ? 'active' : ''}`}
            onClick={() => setSubTab('personal')}
          >
            <Heart size={16} /> Personal Hobbies ({personalHobbies.length})
          </button>
        </div>

        {subTab === 'design' ? (
          <div className="hobbies-grid">
            {designProjects.map((item) => (
              <article key={item.id} className="hobby-card">
                <ProjectImageGallery
                  images={item.images}
                  singleImage={item.image}
                  title={item.title}
                />

                <div className="hobby-card-top">
                  <span className="hobby-date">{item.date}</span>
                  <div className="hobby-links">
                    {item.youtube && (
                      <a
                        href={item.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hobby-media-link yt-link"
                        title="Watch on YouTube"
                        aria-label={`Watch ${item.title} on YouTube`}
                      >
                        <Youtube size={17} /> YouTube
                      </a>
                    )}
                    {item.spotify && (
                      <a
                        href={item.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hobby-media-link sp-link"
                        title="Open on Spotify"
                        aria-label={`Open ${item.title} on Spotify`}
                      >
                        <Music size={15} /> Spotify
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="hobby-title">{item.title}</h3>
                {item.description ? (
                  <p className="hobby-desc">{item.description}</p>
                ) : (
                  <p className="hobby-desc text-muted-subtle">Design & motion asset for DJAL brand presence.</p>
                )}

                {item.video && (
                  <div className="hobby-asset-tag">
                    Asset: <code>{item.video}</code>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="personal-hobbies-grid">
            {personalHobbies.map((hobby) => (
              <div key={hobby.id} className="personal-hobby-card">
                {hobby.image && (
                  <div className="personal-hobby-img-wrap">
                    <img
                      src={hobby.image}
                      alt={hobby.name}
                      className="personal-hobby-thumb"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="personal-hobby-info">
                  <div className="personal-hobby-name-row">
                    {!hobby.image && <span className="personal-hobby-dot"></span>}
                    <span className="personal-hobby-name">{hobby.name}</span>
                  </div>
                  {hobby.category && (
                    <span className="personal-hobby-category">{hobby.category}</span>
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
