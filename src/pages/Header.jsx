import React from "react";
import { ReactTyped } from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { headerdata } from "../data/data";
import { links } from "../utils/constant";
import HeaderPhoto from "../components/HeaderPhoto";
import { ArrowRight, FileText, Send } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="main hero-section py-5">
      <Container className="py-4">
        <Row className="align-items-center min-vh-75 py-4">
          <Col lg={7} md={12} className="py-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-text-container"
            >
              {/* Status Badge */}
              <div className="hero-status-pill mb-3">
                <span className="hero-status-dot" />
                <span>Available for opportunities & projects</span>
              </div>

              {/* Greeting & Name */}
              <p className="hero-greeting mb-1">Hello, I'm</p>
              <h1 className="hero-name mb-3">{headerdata.name}</h1>

              {/* Terminal typed string */}
              <div className="hero-terminal-line mb-3">
                <span className="terminal-prefix">&gt; </span>
                <ReactTyped
                  className="hero-typed-text"
                  strings={headerdata.typedarr}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                  cursorChar="▋"
                />
              </div>

              {/* Value Proposition */}
              <p className="hero-tagline mb-4">
                Software Engineer crafting scalable web applications, modern interactive UIs,
                and AI-driven experiences with clean code and cutting-edge web technologies.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group mb-4">
                <NavLink to="/project" className="hero-btn hero-btn-primary">
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </NavLink>

                {links.resumeLink && (
                  <a
                    href={links.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn hero-btn-secondary"
                  >
                    <FileText size={16} />
                    <span>View Resume</span>
                  </a>
                )}

                <NavLink to="/contact" className="hero-btn hero-btn-outline">
                  <Send size={15} />
                  <span>Contact Me</span>
                </NavLink>
              </div>

              {/* Social Media Links */}
              <div className="hero-social-wrapper">
                <p className="hero-social-label">Connect with me:</p>
                <SocialMediaIcons />
              </div>
            </motion.div>
          </Col>

          <Col lg={5} md={12} className="py-3 text-center d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <HeaderPhoto image={headerdata.image} />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
