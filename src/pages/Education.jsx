import React from "react";
import EducationCard from "../components/EducationCard";
import { Container, Row, Col } from "react-bootstrap";
import { educationdata } from "../data/data";
import Heading from "../components/common/Heading";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="education-section py-5" id="education">
      <Heading title="Academic Background" />
      <Container className="py-4">
        <div className="text-center mb-5">
          <p className="education-intro-text mx-auto">
            My educational milestones in Computer Science, engineering fundamentals, and pre-university studies.
          </p>
        </div>

        <div className="modern-timeline-wrapper">
          {educationdata.map((item, idx) => (
            <motion.div
              key={item.id}
              className="timeline-milestone-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
            >
              {/* Timeline marker node */}
              <div className="timeline-node">
                <div className="timeline-node-inner" />
              </div>

              {/* Card content */}
              <div className="timeline-milestone-content">
                <EducationCard data={item} index={idx} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
