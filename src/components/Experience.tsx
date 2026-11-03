import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, ExternalLink, Linkedin } from 'lucide-react';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import { ExperienceItem, EducationItem } from '../types';

export const Experience: React.FC = () => {
  const [viewTab, setViewTab] = useState<'work' | 'education'>('work');

  const experiences = experienceData.experience as ExperienceItem[];
  const educations = educationData.education as EducationItem[];

  return (
    <div className="page-view">
      <div className="container">
        <div className="page-header">
          <span className="section-tag">Background & Career</span>
          <h1 className="page-title">Experience & Education</h1>
          <p className="page-subtitle">
            A comprehensive history of engineering roles, technical responsibilities, and academic degrees.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="experience-tabs">
          <button
            className={`tab-btn ${viewTab === 'work' ? 'active' : ''}`}
            onClick={() => setViewTab('work')}
          >
            <Briefcase size={16} /> Work Experience ({experiences.length})
          </button>
          <button
            className={`tab-btn ${viewTab === 'education' ? 'active' : ''}`}
            onClick={() => setViewTab('education')}
          >
            <GraduationCap size={16} /> Education ({educations.length})
          </button>
        </div>

        {viewTab === 'work' ? (
          <div className="timeline">
            {experiences.map((item) => (
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
                          title="Company Website"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {item.linkedin && (
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="corp-link"
                          aria-label={`${item.company} on LinkedIn`}
                          title="LinkedIn"
                        >
                          <Linkedin size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="timeline-date-badge">
                    <Calendar size={14} />
                    <span>{item.start_date} — {item.end_date || 'Present'}</span>
                  </div>
                </div>

                {item.tasks && item.tasks.length > 0 && (
                  <ul className="timeline-tasks-list">
                    {item.tasks.map((task, idx) => (
                      <li key={idx} className="timeline-task-item">
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="education-grid">
            {educations.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="edu-icon-wrap">
                  <GraduationCap size={24} />
                </div>
                <div className="edu-content">
                  <h3 className="edu-school">{edu.school}</h3>
                  <div className="edu-degree">{edu.degree_type}</div>
                  <div className="edu-date">
                    <Calendar size={13} /> {edu.start_date} — {edu.end_date}
                  </div>
                  {edu.description && <p className="edu-desc">{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
