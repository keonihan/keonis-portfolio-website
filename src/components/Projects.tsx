import React from 'react';
import { FolderGit2, Github, Calendar } from 'lucide-react';
import projectsData from '../data/projects.json';
import { CodingProjectItem } from '../types';
import { ProjectImageGallery } from './ProjectImageGallery';

export const Projects: React.FC = () => {
  const projects = projectsData.projects as CodingProjectItem[];

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
              className="p-6 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200 flex flex-col"
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors p-1"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

              {project.github && (
                <div className="pt-3 border-t border-blue-500/15">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors truncate max-w-full"
                  >
                    <Github size={13} /> <span className="truncate">{project.github.replace('https://github.com/', '')}</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
