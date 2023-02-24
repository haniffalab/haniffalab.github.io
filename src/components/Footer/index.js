import React from "react";
import { Row, Col, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import HCAlogo from '../../assets/hca-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <footer className="odd">
      <section id="footer" className="footer" >

        <Container>
          <Row className="footer-widget">
            <Col lg={6} md={12}>
              <div className="branding col-12 p-3 text-center text-lg-left item">
                <div className="brand">
                  <a href="/" className="logo">
                    Leverage.
                  </a>
                </div>
                <p>Authentic and innovative.<br />Built to the smallest detail<br />with a focus on usability<br />and performance.</p>
                <ul className="navbar-nav social share-list mt-0 ml-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-instagram ml-0" /></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-facebook" /></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-linkedin" /></a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link"><i className="icon-social-twitter" /></a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={12}>
              <h4 className="title">Our Services</h4>
              <ul className="navbar-nav">
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
            <Col lg={3} md={12}>
              <h4 className="title">Popular Tags</h4>
              <a href="#" className="badge tag">Mobile</a>
              <a href="#" className="badge tag">Development</a>
              <a href="#" className="badge tag">Technology</a>
              <a href="#" className="badge tag">App</a>
              <a href="#" className="badge tag">Education</a>
              <a href="#" className="badge tag">Business</a>
              <a href="#" className="badge tag">Health</a>
              <a href="#" className="badge tag">Industry</a>
            </Col>
          </Row>
        </Container>
      </section >
      <section id="copyright" className="copyright" >
        <Container>
          <div className="row">
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
              <p>© 2022 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-dark" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
}
