import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

const HeaderPhoto = ({ image }) => {
  return (
    <div className="modern-avatar-container">
      {/* Outer ambient glow */}
      <div className="avatar-ambient-glow" />

      {/* Main avatar frame */}
      <motion.div
        className="avatar-frame"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <img src={image} alt="Subramanya K S" className="avatar-photo" />
      </motion.div>

      {/* Floating developer badge */}
      <motion.div
        className="avatar-floating-badge badge-top-right"
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Code2 size={16} className="text-cyan" />
        <span>Full Stack</span>
      </motion.div>

      <motion.div
        className="avatar-floating-badge badge-bottom-left"
        initial={{ y: 0 }}
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Sparkles size={16} className="text-emerald" />
        <span>Problem Solver</span>
      </motion.div>
    </div>
  );
};

export default HeaderPhoto;
