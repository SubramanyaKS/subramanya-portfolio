import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Github, ExternalLink } from "lucide-react";
import SkillPill from "./common/SkillPill";

const ExperienceCard = ({ data }) => {
  return (
    <motion.div
      className="modern-experience-card"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="exp-card-header">
        <div className="exp-company-brand">
          {data.image ? (
            <img src={data.image} alt={data.subtitle} className="exp-company-logo" />
          ) : (
            <div className="exp-company-fallback">
              <Briefcase size={20} />
            </div>
          )}
          <div>
            <h3 className="exp-role-title">{data.title}</h3>
            <div className="exp-company-meta">
              <span className="exp-company-name">{data.subtitle}</span>
              {data.type && <span className="exp-type-badge">{data.type}</span>}
            </div>
          </div>
        </div>

        <div className="exp-time-badge">
          <Calendar size={14} className="text-cyan" />
          <span>{data.period || "2021"}</span>
        </div>
      </div>

      {data.location && (
        <div className="exp-location mb-3">
          <MapPin size={14} className="text-muted-icon" />
          <span>{data.location}</span>
        </div>
      )}

      <p className="exp-description mb-3">{data.description}</p>

      {data.techStack && data.techStack.length > 0 && (
        <div className="exp-tech-row mb-3">
          {data.techStack.map((tech, idx) => (
            <SkillPill key={`${tech}-${idx}`} text={tech} />
          ))}
        </div>
      )}

      {data.githubLink && (
        <div className="exp-actions mt-auto pt-2">
          <a
            href={data.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="exp-code-btn"
            aria-label={`View code for ${data.title}`}
          >
            <Github size={14} />
            <span>View Internship Project</span>
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
