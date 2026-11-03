import React from 'react';
import { FolderGit2, Github, Calendar } from 'lucide-react';
import projectsData from '../data/projects.json';
import { CodingProjectItem } from '../types';
import { ProjectImageGallery } from './ProjectImageGallery';

export const Projects: React.FC = () => {
  const projects = projectsData.projects as CodingProjectItem[];

  return (
    <div className="page-view">
      <div className="container">
        <div className="page-header">
          <span className="section-tag">Software Engineering</span>
          <h1 className="page-title">Coding Projects</h1>
          <p className="page-subtitle">
            Web applications, computer vision tools, full-stack systems, and spatial interfaces.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <ProjectImageGallery
                images={project.images}
                singleImage={project.image}
                title={project.title}
              />

              <div className="project-header">
                <div className="project-icon-group">
                  <FolderGit2 className="project-folder-icon" size={24} />
                  <span className="project-date">
                    <Calendar size={13} /> {project.date}
                  </span>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {project.github && (
                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-repo-link"
                  >
                    <Github size={15} /> <span>{project.github.replace('https://github.com/', '')}</span>
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
