import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  programskills,
  databaseskills,
  webskills,
  ide,
  framework,
  other,
} from "../data/data";
import SkillsCard from "../components/SkillsCard";
import Heading from "../components/common/Heading";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Globe, Wrench, Layers, Terminal, Sparkles } from "lucide-react";

const categories = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "frontend", label: "Frontend & Web", icon: Globe, skills: webskills },
  { id: "backend", label: "Backend & Frameworks", icon: Layers, skills: framework },
  { id: "languages", label: "Languages", icon: Code, skills: programskills },
  { id: "database", label: "Databases", icon: Database, skills: databaseskills },
  { id: "tools", label: "Tools & DevOps", icon: Wrench, skills: [...ide, ...other] },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allSkills = [
    { category: "Web Technologies", skills: webskills },
    { category: "Frameworks & Libraries", skills: framework },
    { category: "Programming Languages", skills: programskills },
    { category: "Databases", skills: databaseskills },
    { category: "Tools & Environments", skills: [...ide, ...other] },
  ];

  const getFilteredSkills = () => {
    if (activeTab === "all") return allSkills;
    const found = categories.find((c) => c.id === activeTab);
    return found ? [{ category: found.label, skills: found.skills }] : [];
  };

  const currentDisplay = getFilteredSkills();

  return (
    <section className="skills-page py-5" id="skills">
      <Heading title="Technical Skills" />
      <Container className="py-4">
        {/* Intro Tagline */}
        <div className="text-center mb-4">
          <p className="skills-intro-text mx-auto">
            A comprehensive overview of programming languages, libraries, databases, and developer tools
            I leverage to build robust and scalable products.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs mb-5">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`skills-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Row className="g-4 justify-content-center">
              {currentDisplay.map((catGroup, idx) => (
                <Col
                  key={catGroup.category}
                  xs={12}
                  md={activeTab === "all" ? 6 : 12}
                  lg={activeTab === "all" ? 4 : 8}
                  className="d-flex"
                >
                  <div className="w-100 modern-skills-bento-card">
                    <div className="bento-card-header">
                      <span className="bento-badge">&lt;/&gt;</span>
                      <h3 className="bento-title">{catGroup.category}</h3>
                      <span className="bento-count">
                        {catGroup.skills.length} tools
                      </span>
                    </div>

                    <div className="bento-card-grid">
                      {catGroup.skills.map((skill) => (
                        <SkillsCard key={`${catGroup.category}-${skill.id}`} data={skill} />
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Highlights Row */}
        <div className="skills-stats-row mt-5">
          <div className="stat-pill">
            <span className="stat-number">20+</span>
            <span className="stat-desc">Technologies & Tools</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-pill">
            <span className="stat-number">MERN</span>
            <span className="stat-desc">Full Stack Proficiency</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-pill">
            <span className="stat-number">REST & AI</span>
            <span className="stat-desc">API Integrations</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
