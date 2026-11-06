import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Play, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import profileData from '../data/profile.json';
import projectsData from '../data/projects.json';
import experienceData from '../data/experience.json';
import graphicDesignData from '../data/graphic_design_projects.json';
import videoEditsData from '../data/video_edits.json';
import { CodingProjectItem, ExperienceItem, GraphicDesignProjectItem, VideoEditItem } from '../types';
import { VideoModal } from '../components/VideoModal';

interface HomePageProps {
  onNavigate: (page: 'home' | 'experience' | 'hobbies' | 'projects' | 'socials') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeVideo, setActiveVideo] = useState<{ 
    url?: string; 
    videoSrc?: string; 
    title: string; 
    startTime?: number;
    aspectRatio?: 'horizontal' | 'vertical';
  } | null>(null);

  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const designScrollRef = useRef<HTMLDivElement>(null);
  const videoScrollRef = useRef<HTMLDivElement>(null);

  const allProjects = projectsData.projects as CodingProjectItem[];
  const recentExperience = (experienceData.experience as ExperienceItem[]).slice(0, 2);
  const allDesign = graphicDesignData.projects as GraphicDesignProjectItem[];
  const allVideoEdits = (videoEditsData.edits || []) as VideoEditItem[];

  const scrollFeed = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 340;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const resolveVideoSrc = (videoField?: string) => {
    if (!videoField) return undefined;
    if (videoField.startsWith('/') || videoField.startsWith('http')) return videoField;
    const withExt = videoField.endsWith('.mp4') ? videoField : `${videoField}.mp4`;
    return `/videos/projects/${withExt}`;
  };

  const handleProjectCardClick = (githubUrl?: string) => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDesignCardClick = (item: GraphicDesignProjectItem) => {
    if (item.youtube) {
      setActiveVideo({ url: item.youtube, title: item.title, startTime: item.start_time, aspectRatio: 'horizontal' });
    } else {
      const localSrc = resolveVideoSrc(item.video);
      if (localSrc) {
        setActiveVideo({ videoSrc: localSrc, title: item.title, aspectRatio: 'horizontal' });
      } else if (item.spotify) {
        window.open(item.spotify, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleVideoEditCardClick = (item: VideoEditItem) => {
    setActiveVideo({
      url: item.youtube,
      title: item.title,
      aspectRatio: item.orientation,
    });
  };

  return (
    <div className="min-h-[80vh] pb-16">
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

      {/* Hero Introduction */}
      <section className="pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl flex flex-col items-start">
            {/* Status Badge */}
            {('status' in profileData) && (profileData as any).status && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500"></span>
                <span>{(profileData as any).status}</span>
              </div>
            )}

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
              {profileData.name}
            </h1>

            {/* Subtitle / Role / Location */}
            <div className="flex items-center gap-2.5 text-base md:text-lg text-slate-300 font-medium mb-5 flex-wrap">
              <span className="text-blue-400 font-semibold">{profileData.title}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{profileData.location}</span>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {profileData.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Web & Software Development Feed — Netflix Style */}
      <section className="py-10 md:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-4 flex-wrap gap-4">
            <div>
              <button 
                onClick={() => onNavigate('projects')}
                className="group inline-flex items-baseline gap-2 cursor-pointer text-left"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  Web & Software Development
                </h2>
                <span className="text-xs text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                  Explore all <ArrowRight size={12} />
                </span>
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollFeed(projectsScrollRef, 'left')}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Scroll projects left"
                title="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollFeed(projectsScrollRef, 'right')}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Scroll projects right"
                title="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Netflix-style horizontal feed row (tight gap, whole card is image) */}
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={projectsScrollRef}
            className="flex gap-2.5 sm:gap-3 md:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-3 px-6 md:px-12 lg:px-16"
            style={{ scrollSnapType: 'x proximity' }}
          >
            {allProjects.map((project) => (
              <article 
                key={project.id} 
                onClick={() => handleProjectCardClick(project.github)}
                className="rounded-xl w-[240px] sm:w-[280px] md:w-[320px] aspect-video shrink-0 relative rounded-[4px] overflow-hidden cursor-pointer group transition-all duration-300 ease-out hover:scale-105 hover:z-20 shadow-md shadow-black/60 hover:shadow-2xl hover:shadow-black bg-black"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Full cover image */}
                <img
                  src={project.images?.[0] || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle vignette + bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-2 right-2">
                  <span className="px-1.5 py-0.5 rounded-[2px] bg-red-600/90 text-[9px] font-black text-white uppercase tracking-wider shadow-sm">
                    {project.date.split(' ')[1] || 'CODE'}
                  </span>
                </div>

                {/* Bottom Overlay: Title & Netflix-style badges */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex flex-col justify-end">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug drop-shadow-md truncate">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="px-2 py-0.5 rounded-[2px] bg-white/20 text-[9px] font-semibold text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors flex items-center gap-1">
                      <Github size={10} /> View Repo
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Experience Summary */}
      <section className="py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Recent Experience
              </h2>
            </div>
            <button
              onClick={() => onNavigate('experience')}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group cursor-pointer"
            >
              View full background
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="space-y-4">
            {recentExperience.map((item) => (
              <div 
                key={item.id} 
                className="rounded-xl p-5 md:p-6 bg-[#0c1420]/80 hover:bg-[#111b2c]/90 border border-white/8 hover:border-white/16 rounded-[4px] transition-all duration-200"
              >
                <div className="flex justify-between items-start flex-wrap gap-3 mb-2.5">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-base md:text-lg font-bold text-white">{item.position}</h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-white/10 text-slate-300 font-mono">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-blue-400">{item.company}</span>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-400 transition-colors"
                          aria-label={`Visit ${item.company} website`}
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-[2px] bg-white/5 border border-white/10">
                    {item.start_date} — {item.end_date || 'Present'}
                  </div>
                </div>

                {item.tasks && item.tasks.length > 0 && (
                  <p className="text-slate-300 text-sm leading-relaxed">
                    • {item.tasks[0]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design & Motion Feed — Netflix Style */}
      <section className="py-10 md:py-14 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-4 flex-wrap gap-4">
            <div>
              <button 
                onClick={() => onNavigate('hobbies')}
                className="group inline-flex items-baseline gap-2 cursor-pointer text-left"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  Graphic Design & Motion
                </h2>
                <span className="text-xs text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                  Explore all <ArrowRight size={12} />
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollFeed(designScrollRef, 'left')}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Scroll design left"
                title="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollFeed(designScrollRef, 'right')}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Scroll design right"
                title="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Netflix-style horizontal feed row (tight gap, whole card is image) */}
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={designScrollRef}
            className="flex gap-2.5 sm:gap-3 md:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-3 px-6 md:px-12 lg:px-16"
            style={{ scrollSnapType: 'x proximity' }}
          >
            {allDesign.map((item) => (
              <article 
                key={item.id} 
                onClick={() => handleDesignCardClick(item)}
                className="rounded-xl w-[240px] sm:w-[280px] md:w-[320px] aspect-video shrink-0 relative rounded-[4px] overflow-hidden cursor-pointer group transition-all duration-300 ease-out hover:scale-105 hover:z-20 shadow-md shadow-black/60 hover:shadow-2xl hover:shadow-black bg-black"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Full cover image */}
                <img
                  src={item.images?.[0] || item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle vignette + bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-2 right-2">
                </div>

                {/* Bottom Overlay: Title & Netflix-style badges */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex flex-col justify-end">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug drop-shadow-md truncate">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="px-2 py-0.5 rounded-[2px] bg-white/20 text-[9px] font-semibold text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors flex items-center gap-1">
                      <Play size={9} className="fill-current" /> Watch
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Editing Feed — Netflix Style */}
      <section className="py-10 md:py-14 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-4 flex-wrap gap-4">
            <div>
              <button 
                onClick={() => onNavigate('hobbies')}
                className="group inline-flex items-baseline gap-2 cursor-pointer text-left"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  Video Editing
                </h2>
                <span className="text-xs text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                  Explore all <ArrowRight size={12} />
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollFeed(videoScrollRef, 'left')}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Scroll video edits left"
                title="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollFeed(videoScrollRef, 'right')}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Scroll video edits right"
                title="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Netflix-style horizontal feed row */}
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={videoScrollRef}
            className="flex gap-2.5 sm:gap-3 md:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-3 items-center"
            style={{ scrollSnapType: 'x proximity' }}
          >
            {allVideoEdits.map((item) => (
              <article 
                key={item.id} 
                onClick={() => handleVideoEditCardClick(item)}
                className={`shrink-0 relative rounded-[4px] overflow-hidden cursor-pointer group transition-all duration-300 ease-out hover:scale-105 hover:z-20 shadow-md shadow-black/60 hover:shadow-2xl hover:shadow-black bg-black ${
                  item.orientation === 'vertical'
                    ? 'w-[150px] sm:w-[170px] md:w-[190px] aspect-[9/16]'
                    : 'w-[240px] sm:w-[280px] md:w-[320px] aspect-video'
                }`}
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Full cover thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle vignette + bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Bottom Overlay: Title, Location/Date & Watch button */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex flex-col justify-end">
                  <div className="text-[10px] text-blue-300 font-mono mb-0.5 truncate">
                    {item.location ? `${item.location} • ` : ''}{item.date}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug drop-shadow-md truncate">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="px-2 py-0.5 rounded-[2px] bg-white/20 text-[9px] font-semibold text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors flex items-center gap-1">
                      <Play size={9} className="fill-current text-red-400 group-hover:text-red-600" /> Watch
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
