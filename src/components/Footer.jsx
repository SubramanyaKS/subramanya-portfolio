import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { headerdata } from "../data/data";
import { links } from "../utils/constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer py-4 mt-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div className="footer-brand text-center text-md-start">
            <span className="footer-name">{headerdata.name}</span>
            <p className="footer-tagline mb-0">Software Engineer & Frontend Developer</p>
          </div>

          <div className="footer-credits text-center">
            <p className="mb-0">
              Designed & Built with <Heart size={14} className="text-danger inline-heart" fill="#ef4444" /> using React 19 & Vite
            </p>
            <span className="footer-year">&copy; {currentYear} All rights reserved.</span>
          </div>

          <div className="footer-socials d-flex align-items-center gap-2">
            <a
              href={links.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={links.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={links.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href={links.gmailLink}
              className="footer-social-link"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
