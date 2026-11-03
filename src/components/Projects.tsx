import React from 'react';
import { FolderGit2, Github, Calendar, ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';
import { CodingProjectItem } from '../types';
import { ProjectImageGallery } from './ProjectImageGallery';

export const Projects: React.FC = () => {
  const projects = projectsData.projects as CodingProjectItem[];

  const handleCardClick = (githubUrl?: string) => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-[82vh] py-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
            Software Engineering
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Coding Projects
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Web applications, computer vision tools, full-stack systems, and spatial interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article 
              key={project.id} 
              onClick={() => handleCardClick(project.github)}
              className="p-6 bg-[#0a1324]/85 hover:bg-[#101c36]/95 border border-blue-500/15 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 rounded-md backdrop-blur-md transition-all duration-200 flex flex-col cursor-pointer group hover:-translate-y-0.5"
            >
              <ProjectImageGallery
                images={project.images}
                singleImage={project.image}
                title={project.title}
              />

              <div className="flex justify-between items-center mb-2.5">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="text-blue-400" size={20} />
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar size={12} /> {project.date}
                  </span>
                </div>
                {project.github && (
                  <span
                    className="text-slate-400 group-hover:text-blue-400 transition-colors p-1"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github size={18} />
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

              {project.github && (
                <div className="pt-3 border-t border-blue-500/15 flex items-center justify-between text-xs text-blue-400 font-semibold">
                  <span className="truncate max-w-[80%] font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                    {project.github.replace('https://github.com/', '')}
                  </span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
