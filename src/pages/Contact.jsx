import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Heading from "../components/common/Heading";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";
import { links } from "../utils/constant";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "subramanyaks22@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: links.githubLink,
      icon: Github,
      username: "@SubramanyaKS",
    },
    {
      name: "LinkedIn",
      href: links.linkedinLink,
      icon: Linkedin,
      username: "subramanyakshebbar",
    },
    {
      name: "Twitter / X",
      href: links.twitterLink,
      icon: Twitter,
      username: "@subbukshebbar",
    },
    {
      name: "YouTube",
      href: links.youtubeLink,
      icon: Youtube,
      username: "@subramanyakshebbar",
    },
  ];

  return (
    <section className="contact-page py-5" id="contact">
      <Heading title="Get In Touch" />
      <Container className="py-4">
        <Row className="g-5 align-items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <Col lg={5} md={12}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="contact-info-panel"
            >
              <div className="contact-badge mb-3">
                <span className="contact-badge-dot" />
                <span>Let's Connect</span>
              </div>

              <h2 className="contact-panel-title mb-3">
                Let's discuss your next project or role
              </h2>
              <p className="contact-panel-desc mb-4">
                Whether you're looking for a frontend or full-stack developer, have an inquiry about my work,
                or want to collaborate on open-source, I'm just a message away.
              </p>

              {/* Quick Copy Email Card */}
              <div className="contact-email-card mb-4" onClick={handleCopyEmail}>
                <div className="email-card-icon">
                  <Mail size={20} />
                </div>
                <div className="email-card-text">
                  <span className="email-card-label">Direct Email</span>
                  <span className="email-card-value">{emailAddress}</span>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  aria-label="Copy email address"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyEmail();
                  }}
                >
                  {copied ? (
                    <span className="copied-tag">
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Location & Timezone info */}
              <div className="contact-detail-items mb-4">
                <div className="detail-item">
                  <MapPin size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Location</span>
                    <p className="detail-val">Karnataka, India</p>
                  </div>
                </div>

                <div className="detail-item">
                  <Clock size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Availability</span>
                    <p className="detail-val">Open to full-time & contract roles (IST / Remote)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-social-section">
                <h4 className="social-section-title mb-3">Connect on Social Platforms</h4>
                <div className="social-links-grid">
                  {socialLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modern-social-card"
                      >
                        <div className="social-card-icon">
                          <IconComponent size={18} />
                        </div>
                        <div className="social-card-info">
                          <span className="social-card-name">{item.name}</span>
                          <span className="social-card-handle">{item.username}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col lg={7} md={12}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
