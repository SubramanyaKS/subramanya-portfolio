import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillPill from './common/SkillPill';
import { ExternalLink, Github, Download, Folder, FolderOpen } from 'lucide-react';

const ProjectCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="modern-project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className="project-card-image-wrapper">
        <img
          src={data.image}
          alt={data.title}
          className="project-card-image"
          loading="lazy"
        />
        <div className="project-card-image-overlay" />
        <div className="project-card-badge">
          {isHovered ? (
            <FolderOpen size={18} className="project-badge-icon active" />
          ) : (
            <Folder size={18} className="project-badge-icon" />
          )}
        </div>
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{data.title}</h3>
        {data.subtitle && (
          <h4 className="project-card-subtitle">{data.subtitle}</h4>
        )}
        <p className="project-card-description">{data.description}</p>

        {data.techStack && data.techStack.length > 0 && (
          <div className="project-card-tech">
            {data.techStack.map((tech, i) => (
              <SkillPill key={`${tech}-${i}`} text={tech} />
            ))}
          </div>
        )}

        <div className="project-card-actions">
          {data.websiteLink && (
            <a
              href={data.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-primary"
              aria-label={`Live demo for ${data.title}`}
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
          {data.githubLink && (
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-secondary"
              aria-label={`Source code for ${data.title}`}
            >
              <Github size={15} />
              <span>Code</span>
            </a>
          )}
          {data.downloadLink && (
            <a
              href={data.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-outline"
              aria-label={`Download ${data.title}`}
            >
              <Download size={15} />
              <span>Download</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
