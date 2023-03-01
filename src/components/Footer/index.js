import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from "../../components/Logo";


export default function Footer() {
  return (
    <footer>
      <section id="footer" className="footer py-5">
        <Container>
          <Row className="footer-widget">
            <Col lg={6} md={12}>
              <div className="branding col-12 text-lg-left item">
                <div className="brand mb-3">
                  <a href="/" className="logo">
                    <Logo width={40} height={40} />
                  </a>
                </div>
                <p>Strength through diversity.<br />
                  Advocating team science.<br />
                  Inclusion and innovation.</p>
                <h4>Wellcome Sanger Institute</h4>
                <p>Haniffa Group, Wellcome Genome Campus, Hinxton,<br />Cambridge, CB10&nbsp;1SA<br />Email: haniffalab@sanger.ac.uk</p>
                <h4>Newcastle University</h4>
                <p>Haniffa Lab, Biosciences Institute, Newcastle University,<br />Newcastle upon Tyne, NE2&nbsp;4HH<br />Email: haniffalab@ncl.ac.uk</p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <Row>
                <Col lg={6} md={12}>
                  <h4 className="title">Projects</h4>
                  <ul className="navbar-nav mb-5">
                    <li className="nav-item">
                      <a href="#" className="nav-link">Website Development</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Building Applications</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">SEO &amp; Digital Marketing</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Branding and Identity</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Digital Images &amp; Videos</a>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} md={12}>
                  <h4 className="title">Software</h4>
                  <ul className="navbar-nav mb-5">
                    <li className="nav-item">
                      <a href="#" className="nav-link">Website Development</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Building Applications</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">SEO &amp; Digital Marketing</a>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <h4 className="title">Community</h4>
                  <ul className="navbar-nav mb-5">
                    <li className="nav-item">
                      <a href="#" className="nav-link">Github</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Twitter</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Slack</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Figma</a>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} md={12}>
                  <h4 className="title">More</h4>
                  <ul className="navbar-nav mb-5">
                    <li className="nav-item">
                      <a href="#" className="nav-link">Acknowlegements</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Terms</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Privacy</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Funding</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section >
      <section id="copyright" className="copyright">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-between my-4 align-middle">
                <div className="align-self-center">&copy; 2023 Haniffa Lab</div>
                <div className="align-self-center">
                  <div className="d-flex social justify-content-center justify-content-md-end">
                    <a href="#" className="ms-3">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="#" className="ms-3">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </footer >
  );
}
