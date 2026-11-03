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
    <div className="min-h-[82vh] py-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
            Background & Career
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Experience & Education
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            A comprehensive history of engineering roles, technical responsibilities, and academic degrees.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all cursor-pointer ${
              viewTab === 'work'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                : 'bg-[#0a1324]/80 text-slate-300 hover:text-white border border-blue-500/15 hover:border-blue-500/30'
            }`}
            onClick={() => setViewTab('work')}
          >
            <Briefcase size={16} /> Work Experience ({experiences.length})
          </button>
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all cursor-pointer ${
              viewTab === 'education'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                : 'bg-[#0a1324]/80 text-slate-300 hover:text-white border border-blue-500/15 hover:border-blue-500/30'
            }`}
            onClick={() => setViewTab('education')}
          >
            <GraduationCap size={16} /> Education ({educations.length})
          </button>
        </div>

        {viewTab === 'work' ? (
          <div className="space-y-5">
            {experiences.map((item) => (
              <div 
                key={item.id} 
                className="p-6 md:p-8 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200"
              >
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{item.position}</h3>
                      <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-500/20 font-mono">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-base font-semibold text-blue-400">{item.company}</span>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-400 transition-colors p-0.5"
                          aria-label={`Visit ${item.company} website`}
                          title="Website"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                      {item.linkedin && (
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-400 transition-colors p-0.5"
                          aria-label={`${item.company} on LinkedIn`}
                          title="LinkedIn"
                        >
                          <Linkedin size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 px-3 py-1 rounded bg-[#101c36] border border-blue-500/20">
                    <Calendar size={13} className="text-blue-400" />
                    <span>{item.start_date} — {item.end_date || 'Present'}</span>
                  </div>
                </div>

                {item.tasks && item.tasks.length > 0 && (
                  <ul className="space-y-2 mt-4 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                    {item.tasks.map((task, idx) => (
                      <li key={idx} className="marker:text-blue-500">
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {educations.map((edu) => (
              <div 
                key={edu.id} 
                className="p-6 md:p-8 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200 flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded bg-blue-900/50 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                  <div className="text-base text-blue-400 font-semibold mb-2">{edu.degree_type}</div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar size={13} /> {edu.start_date} — {edu.end_date}
                  </div>
                  {edu.description && <p className="text-slate-300 text-sm mt-3 leading-relaxed">{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
