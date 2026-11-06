import React from "react";
import { experiencedata } from "../data/data";
import { Col, Container, Row } from "react-bootstrap";
import ExperienceCard from "../components/ExperienceCard";
import Heading from "../components/common/Heading";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="experience-section py-5" id="experience">
      <Heading title="Work Experience" />
      <Container className="py-4">
        <div className="text-center mb-5">
          <p className="experience-intro-text mx-auto">
            A timeline of my professional software engineering journey, roles, internships, and key contributions.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {experiencedata.map((exp, i) => (
            <Col key={exp.id} xs={12} lg={10} className="d-flex">
              <motion.div
                className="w-100"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <ExperienceCard data={exp} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
