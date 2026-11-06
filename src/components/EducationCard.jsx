import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, School, Building2 } from "lucide-react";

const EducationCard = ({ data, index }) => {
  const getIcon = () => {
    if (index === 0) return <GraduationCap size={22} className="text-cyan" />;
    if (index === 1) return <School size={20} className="text-cyan" />;
    return <Building2 size={20} className="text-cyan" />;
  };

  return (
    <motion.div
      className="modern-education-card"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="edu-card-top">
        <div className="edu-icon-badge">{getIcon()}</div>
        <div className="edu-header-text">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
            <h3 className="edu-course-title">{data.course}</h3>
            <span className="edu-year-badge">
              <Calendar size={13} />
              <span>{data.year}</span>
            </span>
          </div>
          <h4 className="edu-college-name">{data.college}</h4>
          <p className="edu-university-name">{data.university}</p>
        </div>
      </div>

      <div className="edu-card-footer mt-3 pt-3">
        {data.specification && (
          <div className="edu-spec-badge">
            <Award size={14} className="text-emerald" />
            <span>Specialization: <strong>{data.specification}</strong></span>
          </div>
        )}
        {data.status && (
          <span className="edu-status-pill">{data.status}</span>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
