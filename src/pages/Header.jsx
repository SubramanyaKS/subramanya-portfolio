import React from "react";
import { ReactTyped } from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from 'react-bootstrap';
import SocialMediaIcons from "../components/SocialMediaIcons";
import Reveal from "../components/common/Reveal";
import { headerdata } from "../data/data";
import HeaderPhoto from "../components/HeaderPhoto";

const Header = () => {
  return (
    <section className="main py-5">
      <Container fluid className="py-4">
        <Row className="py-3">
          <Col className="col-lg-6 col-mg-12 py-3 mr-auto">
            <div className="ps-5">
              <Reveal>
                <h1 className="mb-3 text-center hi">Hi, I'm </h1>
              </Reveal>
              <Reveal>
                <h1 className="mb-3 fs-1">{headerdata.name}</h1>
              </Reveal>
              <p className="react-typed">$
                <ReactTyped
                  className="typed-text"
                  strings={headerdata.typedarr}
                  typeSpeed={90}
                  backSpeed={90}
                  loop
                  cursorChar="_"
                />
              </p>
              <SocialMediaIcons />
            </div>
          </Col>
          <Col className="col-lg-6 col-mg-12 pb-3 mr-auto">
            <div className="text-center d-flex justify-content-center">
              <HeaderPhoto image={headerdata.image} />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Header;
