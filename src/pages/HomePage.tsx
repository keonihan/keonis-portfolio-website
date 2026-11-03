import React from 'react';
import { ArrowRight, FolderGit2, Briefcase, MapPin, ExternalLink, Github } from 'lucide-react';
import profileData from '../data/profile.json';
import projectsData from '../data/projects.json';
import experienceData from '../data/experience.json';
import graphicDesignData from '../data/graphic_design_projects.json';
import { CodingProjectItem, ExperienceItem, GraphicDesignProjectItem } from '../types';
import { ProjectImageGallery } from '../components/ProjectImageGallery';

interface HomePageProps {
  onNavigate: (page: 'home' | 'experience' | 'hobbies' | 'projects' | 'socials') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProjects = (projectsData.projects as CodingProjectItem[]).slice(0, 3);
  const recentExperience = (experienceData.experience as ExperienceItem[]).slice(0, 2);
  const featuredDesign = (graphicDesignData.projects as GraphicDesignProjectItem[]).slice(0, 2);

  return (
    <div className="min-h-[80vh] pb-16">
      {/* Hero Introduction */}
      <section className="py-16 md:py-20 border-b border-blue-500/15">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl flex flex-col items-start">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-blue-200 text-xs font-semibold mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500 animate-pulse"></span>
              <span>{profileData.status}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">{profileData.name}</span>
            </h1>

            {/* Subtitle / Role / Location */}
            <div className="flex items-center gap-2.5 text-base md:text-lg text-slate-300 font-medium mb-5 flex-wrap">
              <span className="text-blue-400 font-semibold">{profileData.title}</span>
              <span className="text-blue-500/40">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300 text-sm md:text-base">
                <MapPin size={16} className="text-blue-400" /> {profileData.location}
              </span>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              {profileData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => onNavigate('projects')} 
                className="btn btn-primary"
              >
                <FolderGit2 size={17} /> Explore Projects <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => onNavigate('experience')} 
                className="btn btn-secondary"
              >
                <Briefcase size={17} /> Experience & Education
              </button>
              <button 
                onClick={() => onNavigate('socials')} 
                className="btn btn-secondary"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Summary */}
      <section className="py-14 border-b border-blue-500/15">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Featured Code
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Selected Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group cursor-pointer"
            >
              View all ({projectsData.projects.length}) projects 
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <article 
                key={project.id} 
                className="p-6 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200 flex flex-col"
              >
                <ProjectImageGallery
                  images={project.images}
                  singleImage={project.image}
                  title={project.title}
                />
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="text-blue-400" size={20} />
                    <span className="text-xs text-slate-400 font-mono">{project.date}</span>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors p-1"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-grow">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Experience Summary */}
      <section className="py-14 border-b border-blue-500/15 bg-blue-950/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Career Snapshot
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Recent Experience
              </h2>
            </div>
            <button
              onClick={() => onNavigate('experience')}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group cursor-pointer"
            >
              View full background & education 
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="space-y-4">
            {recentExperience.map((item) => (
              <div 
                key={item.id} 
                className="p-6 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200"
              >
                <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg font-bold text-white">{item.position}</h3>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-500/20 font-mono">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-blue-300">{item.company}</span>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-400 transition-colors"
                          aria-label={`Visit ${item.company} website`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-300 px-2.5 py-1 rounded bg-[#101c36] border border-blue-500/20">
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

      {/* Creative & Design Snapshot */}
      <section className="py-14 border-b border-blue-500/15">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Creative & Motion
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Design Highlights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('hobbies')}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group cursor-pointer"
            >
              Explore all hobbies & visuals 
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredDesign.map((item) => (
              <article 
                key={item.id} 
                className="p-6 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200 flex flex-col"
              >
                <ProjectImageGallery
                  images={item.images}
                  singleImage={item.image}
                  title={item.title}
                />
                <div className="text-xs font-mono text-slate-400 mb-2">{item.date}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-grow">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 bg-[#0a1324]/90 border border-blue-500/20 rounded-md backdrop-blur-md flex justify-between items-center flex-wrap gap-6">
            <div className="max-w-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Get In Touch
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Let's connect & collaborate
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Open to software engineering roles, full-stack projects, and creative motion inquiries.
              </p>
            </div>
            <button
              onClick={() => onNavigate('socials')}
              className="btn btn-primary"
            >
              Reach Out <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
