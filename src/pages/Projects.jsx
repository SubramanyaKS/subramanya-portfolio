import React from "react";
import { projectsdata } from "../data/data.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../components/common/Heading.jsx";
import { motion } from "framer-motion";
import PillButton from "../components/common/PillButton.jsx";
import { ArrowBigRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="project py-5" id="project">
      <Heading title="Projects" />
      <Container className="py-4">
        <Row className="g-4 justify-content-center">
          {projectsdata.map((project, i) => (
            <Col
              key={project.id}
              xs={12}
              md={6}
              lg={4}
              className="d-flex align-items-stretch"
            >
              <motion.div
                className="w-100 d-flex"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              >
                <ProjectCard data={project} />
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <PillButton
            OnClick={() =>
              window.open(
                "https://github.com/SubramanyaKS?tab=repositories",
                "_blank",
                "noopener,noreferrer"
              )
            }
            title="View More on GitHub "
            Icon={ArrowBigRight}
          />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
