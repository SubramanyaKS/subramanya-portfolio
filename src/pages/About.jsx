import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { aboutdetails } from "../data/data";
import Heading from "../components/common/Heading";
import splitWords from "../utils/splitWords";
import { motion } from "framer-motion";
import { resume, wordVarients } from "../utils/utilFunctions";
import PillButton from "../components/common/PillButton";
import { Download } from "lucide-react";

const About = () => {
  const description = splitWords(aboutdetails.description);

  return (
    <section className="about py-5" id="about">
      <Heading title="About Me" />
      <Container className="py-4">
        <Row className="align-items-center g-5">
          <Col lg={5} md={12} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img className="MeImg" src={aboutdetails.image} alt={aboutdetails.name} />
            </motion.div>
          </Col>
          <Col lg={7} md={12}>
            <div className="ps-lg-3">
              <motion.p
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.02 }}
                className="mb-4 text-light"
              >
                I am{" "}
                <span className="fw-bold" style={{ color: "#22d3ee" }}>
                  {aboutdetails.name},{" "}
                </span>
                {description.map((ch, i) => (
                  <motion.span key={i} transition={{ duration: 0.5 }} variants={wordVarients}>
                    {ch}
                  </motion.span>
                ))}
              </motion.p>
              <div className="mt-4">
                <PillButton
                  OnClick={() => resume(aboutdetails.resumeLink)}
                  title="Download Resume "
                  Icon={Download}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
