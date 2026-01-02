import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { aboutdetails } from "../data/data";
import Heading from "../components/common/Heading";
import splitWords from "../utils/splitWords";
import { motion } from 'framer-motion';
import { resume, wordVarients } from "../utils/utilFunctions";
import PillButton from "../components/common/PillButton";
import { Download } from "lucide-react";


const About = () => {
  const description = splitWords(aboutdetails.description);

  return (
      <section className="about py-4" id="about">
        <Heading title="About Me" />
        <Container fluid>
          <Row>
            <Col>
              <img className="MeImg" src={aboutdetails.image} alt="me.." />
            </Col>
            <Col>
              <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.02 }} className="py-5">
                I am{" "}
                <span style={{ color: "#00ff00" }} className="font-weight-bold">
                  <b>{aboutdetails.name}, </b>
                </span>
                {description.map((ch,i) => (
                  <motion.span key={i} transition={{ duration: 0.5 }} variants={wordVarients}>
                    {ch}
                  </motion.span>

                ))}
              </motion.p>
              <PillButton OnClick={() => resume(aboutdetails.resumeLink)} title="Download Resume "  Icon={Download}/>
            </Col>
          </Row>
        </Container>
      </section>
  );
};
export default About;
