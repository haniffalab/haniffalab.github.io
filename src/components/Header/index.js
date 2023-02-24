import { ButtonGroup, Button, Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import Logo from '../../assets/logo.png';

import Breadcrumbs from '../../components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Header({
  breadcrumbTitle }) {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])
  return (
    <>
      <header id={'header'}>
        <Navbar expand="lg" bg="light" variant="light" className={scroll ? " navbar-sticky" : null}>
          <Container className="header">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />
            </Navbar.Brand>
            <Navbar.Toggle className="justify-content-end" aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-end">
              <Nav className="items">
                <Nav.Link as={Link} to="/studies" >Research</Nav.Link>
                <Nav.Link as={Link} to="/analysis" >Team</Nav.Link>
                <Nav.Link as={Link} to="/datasets" >Publications</Nav.Link>
                <Nav.Link as={Link} to="/samples" >Blog</Nav.Link>
                <Nav.Link as={Link} to="/donors" ><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                <Nav.Link as={Link} to="/donors" ><FontAwesomeIcon icon={faGithub} /></Nav.Link>
              </Nav>
              <ButtonGroup aria-label="Support" className="justify-content-end">
                <Button variant="secondary" size="sm" href="https://github.com/haniffalab/vitessce-app">Docs</Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section id="slider" className="hero odd p-0 featured">
        <div className="swiper-container no-slider animation slider-h-100">
          <div className="swiper-wrapper">
            {/* Item 1 */}
            <div className="swiper-slide slide-center">
              {/* Particles */}
              <video id="background-video" className="particles full-image" data-mask={70} loop autoPlay muted poster="https://images.unsplash.com/photo-1677088886413-1eb2b25f661b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div id="particles-1" className="particles full-image" data-particle="bubble" data-mask={70} />
              <div className="slide-content row">
                <div className="col-12 d-flex inner">
                  <div className="center align-self-center text-center">
                    <h1 data-aos="zoom-out-up" data-aos-delay={400} className="title effect-static-text"># A Different<br />Digital Agency</h1>
                    <p data-aos="zoom-out-up" data-aos-delay={800} className="description ml-auto mr-auto">We work with a focus on creativity, combining design and results.</p>
                    <a href="#contact" data-aos="zoom-out-up" data-aos-delay={1200} className="smooth-anchor ml-auto mr-auto mt-5 btn primary-button"><i className="icon-cup" />GET STARTED</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
    </>
  );
}
