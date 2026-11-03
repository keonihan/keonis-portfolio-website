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
  // Take top 3 projects for summary
  const featuredProjects = (projectsData.projects as CodingProjectItem[]).slice(0, 3);
  // Take top 2 work experiences for summary
  const recentExperience = (experienceData.experience as ExperienceItem[]).slice(0, 2);
  // Take top 2 graphic design pieces
  const featuredDesign = (graphicDesignData.projects as GraphicDesignProjectItem[]).slice(0, 2);

  return (
    <div className="page-view home-page">
      {/* Hero Introduction */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-status-tag">
              <span className="status-dot"></span>
              <span>{profileData.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{profileData.name}</span>
            </h1>

            <div className="hero-subtitle-bar">
              <span className="hero-role">{profileData.title}</span>
              <span className="hero-divider">•</span>
              <span className="hero-location">
                <MapPin size={15} /> {profileData.location}
              </span>
            </div>

            <p className="hero-bio">
              {profileData.bio}
            </p>

            <div className="hero-cta">
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
      <section className="home-summary-section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="section-tag">Featured Code</span>
              <h2 className="section-title">Selected Projects</h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="view-more-link"
            >
              View all ({projectsData.projects.length}) projects <ArrowRight size={15} />
            </button>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <ProjectImageGallery
                  images={project.images}
                  singleImage={project.image}
                  title={project.title}
                />
                <div className="project-header">
                  <div className="project-icon-group">
                    <FolderGit2 className="project-folder-icon" size={22} />
                    <span className="project-date">{project.date}</span>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Experience Summary */}
      <section className="home-summary-section section-alt">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="section-tag">Career Snapshot</span>
              <h2 className="section-title">Recent Experience</h2>
            </div>
            <button
              onClick={() => onNavigate('experience')}
              className="view-more-link"
            >
              View full background & education <ArrowRight size={15} />
            </button>
          </div>

          <div className="timeline">
            {recentExperience.map((item) => (
              <div key={item.id} className="timeline-card">
                <div className="timeline-header-row">
                  <div>
                    <div className="timeline-role-group">
                      <h3 className="timeline-heading">{item.position}</h3>
                      <span className="timeline-type-tag">{item.type}</span>
                    </div>
                    <div className="timeline-company-row">
                      <span className="timeline-corp">{item.company}</span>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="corp-link"
                          aria-label={`Visit ${item.company} website`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="timeline-date-badge">
                    <span>{item.start_date} — {item.end_date || 'Present'}</span>
                  </div>
                </div>

                {item.tasks && item.tasks.length > 0 && (
                  <p className="timeline-summary-bullet">
                    • {item.tasks[0]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative & Design Snapshot */}
      <section className="home-summary-section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="section-tag">Creative & Motion</span>
              <h2 className="section-title">Design Highlights</h2>
            </div>
            <button
              onClick={() => onNavigate('hobbies')}
              className="view-more-link"
            >
              Explore all hobbies & visuals <ArrowRight size={15} />
            </button>
          </div>

          <div className="hobbies-grid">
            {featuredDesign.map((item) => (
              <article key={item.id} className="hobby-card">
                <ProjectImageGallery
                  images={item.images}
                  singleImage={item.image}
                  title={item.title}
                />
                <div className="hobby-card-top">
                  <span className="hobby-date">{item.date}</span>
                </div>
                <h3 className="hobby-title">{item.title}</h3>
                <p className="hobby-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="home-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <div>
              <span className="section-tag">Get In Touch</span>
              <h3 className="cta-banner-title">Let's connect & collaborate</h3>
              <p className="cta-banner-desc">
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
