import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Area1 from '../../assets/images/research-interest-1.jpg';
import { Link } from "react-router-dom";

import { Vitessce } from 'vitessce';
import vitessceConfig1 from '../../vitessce/configs/1';

import styled from 'styled-components'
import VimeoPlayer from '@u-wave/react-vimeo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

import ImgDiversity from '../../assets/images/undraw_Team_re_0bfe.png';
import ImgTeam from '../../assets/images/undraw_Engineering_team_a7n2.png';
import ImgInclusion from '../../assets/images/undraw_sharing_knowledge_03vp.png';

const Vimeo = styled(VimeoPlayer)`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
  margin-bottom: 30px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Figure = styled.div`
height: 400px;
`



const Home = () => {

  return (
    <div>
      <section id="welcome" className="section-2 highlights image-center">
        <Container>
          <Row className="mt-5 pt-5">
            <Col lg={6} md={12}>
              <h2 className="heading-block">Team Science</h2>
              <p className="text-max-800">Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
            </Col>
            <Col lg={6} md={12}>
              <Vimeo
                video="623468767"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="culture" className="section-2 highlights image-center">
        <Container>
          <Row className="my-5 py-5 text-center">
            <Col lg={4} md={12} className="mt-auto">
              <img src={ImgDiversity} width="300" alt="iphone 2" />
            </Col>
            <Col lg={4} md={12} className="mt-auto">
              <img src={ImgTeam} width="300" alt="iphone 2" />
            </Col>
            <Col lg={4} md={12} className="mt-auto">
              <img src={ImgInclusion} width="300" alt="iphone 2" />
            </Col>
            <Col lg={4} md={12}>
              <h4>Strength through diversity</h4>
              <p>We build professional responsive websites optimized for the most popular search engines.</p>
            </Col>
            <Col lg={4} md={12}>
              <h4>Advocating team science</h4>
              <p>We build professional responsive websites optimized for the most popular search engines.</p>
            </Col>
            <Col lg={4} md={12}>
              <h4>Inclusion and innovation</h4>
              <p>We build professional responsive websites optimized for the most popular search engines.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="highlight" className="section-2 highlights image-center">
        <Container>
          <Row className="text-center mt-5 pt-5">
            <Col>
              <h2>Unlocking immune system development</h2>
              <p className="text-max-800">Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="my-5 py-5">
              <Figure>
                <Vitessce
                  config={vitessceConfig1}
                  height={400}
                  theme="light"
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="research-themes" className="research-themes">
        <Container fluid className="gx-0">
          <Row>
            <Col lg={6} md={12} className="research-area-bg">

            </Col>
            <Col lg={6} md={12} className="text-center">
              <div className="my-5 pt-3">
                <span className="before-heading color">Easily Understandable &amp; Customizable.</span>
                <h3>Walkthrough Videos &amp; Demos</h3>
              </div>
              <Row>
                <Col lg={{ span: 6, offset: 3 }} md={{ span: 10, offset: 1 }}>
                  <Vimeo
                    video="623468767"
                  />
                </Col>
              </Row>
              <p className="my-3 pb-3 lead">Democracy inspire breakthroughs, Rosa Parks; inspiration raise awareness natural resources. Governance impact; transformative donation philanthropy, respect reproductive.</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="gx-0">
          <Row className="row-flex gx-0">
            <Col lg={3} md={12} className="bg-mountbatten-pink text-white text-center">
              <Link to={'/'}>
                <Card className="bg-mountbatten-pink text-white">
                  <Card.Body>
                    <Card.Title>Skin in health and disease across lifespan</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} md={12} className="bg-blue-ncs text-white text-center">
              <Link to={'/'}>
                <Card className="bg-blue-ncs text-white">
                  <Card.Body>
                    <Card.Title>Immunogenomics</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} md={12} className="bg-honolulu-blue text-white text-center">
              <Link to={'/'}>
                <Card className="bg-honolulu-blue text-white">
                  <Card.Body>
                    <Card.Title>Development</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col lg={3} md={12} className="bg-rich-black text-white text-center">
              <Link to={'/'}>
                <Card className="bg-rich-black text-white">
                  <Card.Body>
                    <Card.Title>Development</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section >

      <section id="rse" className="section-2 highlights image-center">
        <Container>
          <Row className="text-center mt-5 pt-5">
            <Col>
              <h2>Research Software Engineering</h2>
              <p className="text-max-800">Get to know a little of our history and the road we traveled that took us to the level we are today</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="my-5 py-5">

              <div className="row col-mb-50 mb-4 align-items-center">
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box flex-md-row-reverse text-md-end fadeIn animated" data-animate="fadeIn">
                    <div className="fbox-icon">
                      <a href="#"><i className="icon-line-heart"></i></a>
                    </div>
                    <div className="fbox-content">
                      <h3>Boxed &amp; Wide Layouts</h3>
                      <p>Stretch your Website to the Full Width or make it boxed to surprise your visitors.</p>
                    </div>
                  </div>
                  <div className="feature-box flex-md-row-reverse text-md-end mt-5 fadeIn animated" data-animate="fadeIn" data-delay="200">
                    <div className="fbox-icon">
                      <a href="#"><i className="icon-line-paper"></i></a>
                    </div>
                    <div className="fbox-content">
                      <h3>Extensive Documentation</h3>
                      <p>We have covered each &amp; everything in our Docs including Videos &amp; Screenshots.</p>
                    </div>
                  </div>
                  <div className="feature-box flex-md-row-reverse text-md-end mt-5 fadeIn animated" data-animate="fadeIn" data-delay="400">
                    <div className="fbox-icon">
                      <a href="#"><i className="icon-line-layers"></i></a>
                    </div>
                    <div className="fbox-content">
                      <h3>Parallax Support</h3>
                      <p>Display your Content attractively using Parallax Sections with HTML5 Videos.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-md-none d-lg-block text-center">
                  <img src="images/services/iphone7.png" alt="iphone 2" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box fadeIn animated text-md-start" data-animate="fadeIn">
                    <div className="fbox-icon">
                      <a href="#"><i className="icon-line-power"></i></a>
                    </div>
                    <div className="fbox-content">
                      <h3>HTML5 Video</h3>
                      <p>Canvas provides support for Native HTML5 Videos that can be added to a Background.</p>
                    </div>
                  </div>
                  <div className="feature-box mt-5 fadeIn animated text-md-start" data-animate="fadeIn" data-delay="200">
                    <div className="fbox-icon">
                      <a href="#"><i className="icon-line-check"></i></a>
                    </div>
                    <div className="fbox-content">
                      <h3>Endless Possibilities</h3>
                      <p>Complete control on each &amp; every element that provides endless customization.</p>
                    </div>
                  </div>
                  <div className="feature-box mt-5 fadeIn animated text-md-start" data-animate="fadeIn" data-delay="400">
                    <div className="fbox-icon">
                      <a href="#"><i className="icon-bulb"></i></a>
                    </div>
                    <div className="fbox-content">
                      <h3>Light &amp; Dark Color Schemes</h3>
                      <p>Change your Website's Primary Scheme instantly by simply adding the dark class.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div >
  );
};

export default Home;