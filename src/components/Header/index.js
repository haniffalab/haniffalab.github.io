import { ButtonGroup, Button, Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import Logo from "../../components/Logo";
import { useLocation } from 'react-router-dom'

import VideoPoster from '../../assets/images/deskwork.jpg';
import VideoWebm from '../../assets/videos/deskwork.webm';
import VideoMp4 from '../../assets/videos/deskwork.mp4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Header({
  breadcrumbTitle }) {
  const [scroll, setScroll] = useState(false)
  const location = useLocation();
  console.log(location.pathname)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0)
    })
  })
  return (
    <>
      <header id={'header'}>
        <Navbar expand="lg" className={scroll ? " navbar-sticky" : null}>
          <Container className="header">
            <Navbar.Brand className="brand" href="/">
              <Logo width={35} height={35} />
              haniffa
            </Navbar.Brand>
            <Navbar.Toggle className="justify-content-end" aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-end">
              <Nav className="items me-3">
                <Nav.Link as={Link} to="/research" >Research</Nav.Link>
                <Nav.Link as={Link} to="/team" >Team</Nav.Link>
                <Nav.Link as={Link} to="/publications" >Publications</Nav.Link>
                <Nav.Link as={Link} to="/" ><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                <Nav.Link as={Link} to="/" ><FontAwesomeIcon icon={faGithub} /></Nav.Link>
              </Nav>
              <ButtonGroup aria-label="Support" className="justify-content-end">
                <Button variant="secondary" size="sm" href="https://github.com/haniffalab/vitessce-app">Cell Atlas</Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {location.pathname == "/" &&
          <>
            <video
              id="background-video"
              className="particles full-image"
              data-mask={70}
              loop
              autoPlay
              muted
              preload="auto"
              poster={VideoPoster}>
              <source src={VideoWebm} type="video/webm" />
              <source src={VideoMp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <section id="slider" className="hero odd p-0 featured">
              <div className="swiper-container no-slider animation slider-h-100">
                <div className="swiper-wrapper">
                  {/* Item 1 */}
                  <div className="swiper-slide slide-center">
                    {/* Particles */}

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
        }

      </header>
    </>
  );
}
