import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Area1 from '../../assets/images/research-interest-1.jpg';
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div>
      <section id="video" className="section-2 highlights image-center">
        <div className="container smaller">
          <div className="row text-center intro">
            <div className="col-12">
              <h2>Institutional</h2>
              <p className="text-max-800">Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 gallery">
              <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="square-image d-flex justify-content-center align-items-center">
                <i className="icon bigger icon-control-play" />
                <img src="assets/images/news-4.jpg" className="fit-image" alt="Fit Image" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="section-1 offers featured">
        <div className="container">
          <div className="row justify-content-center text-center items">
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card no-hover">
                <i className="icon icon-globe" />
                <h4>Website Pro</h4>
                <p>We build professional responsive websites optimized for the most popular search engines.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card no-hover">
                <i className="icon icon-basket" />
                <h4>E-Commerce</h4>
                <p>Increase your sales with an incredible online store, full of features and functionality.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card no-hover">
                <i className="icon icon-screen-smartphone" />
                <h4>Mobile Apps</h4>
                <p>Follow the global trend and create your revolutionary mobile app built with the best technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="research-themes" className="research-themes">
        <Container>
          <Row className="text-center">
            <Col>
              <h2>Research Themes</h2>
              <p >Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="gx-0">
          <Row className="gx-0">
            <Col lg={4} md={12}>
              <Link to={'/'}>
                <Card className="bg-dark text-white">
                  <Card.Img src={Area1} alt="Card image" />
                  <Card.ImgOverlay className="text-center">
                    <div className="card-caption">
                      <Card.Title>Skin in health and disease across lifespan </Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
            <Col lg={4} md={12}>
              <Link to={'/'}>
                <Card className="bg-dark text-white">
                  <Card.Img src={Area1} alt="Card image" />
                  <Card.ImgOverlay className="text-center">
                    <div className="card-caption">
                      <Card.Title>Immunogenomics  </Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Link>

            </Col>
            <Col lg={4} md={12}>
              <Link to={'/'}>
                <Card className="bg-dark text-white">
                  <Card.Img src={Area1} alt="Card image" />
                  <Card.ImgOverlay className="text-center">
                    <div className="card-caption"><Card.Title>Development </Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Link>

            </Col>
          </Row>
        </Container>
      </section >
      <div id="app-features" class="app-features section">
        <div class="container-fluid">
          <div class="row">
            <div class="app-screenshot col-lg-4 col-md-12 col-sm-12 px-0 py-5">
              <a target="_blank" href="https://developmental.cellatlas.io/">
                <img class="mt-auto mb-auto" src="/assets/img/app-screenshot.webp" alt="Software Screenshot" />
              </a>
            </div>
            <div class="app-features-wrapper col-lg-4 col-md-6 col-sm-12 py-5 mx-auto">
              <div class="container">
                <h3 class="section-title underline--left my-5">Research Software Engineering</h3>
                <div class="feature py-3 d-flex">
                  <div class="icon text-white bg-info mr-5"><i class="fa fa-mouse-pointer"></i></div>
                  <div>
                    <h5>Web app data explorer</h5>
                    <p>For analysis and exploration of single cell RNA sequencing transcriptomics data</p>
                  </div>
                </div>
                <div class="feature py-3 d-flex">
                  <div class="icon text-white bg-info mr-5"><i class="fas fa-dna"></i></div>
                  <div>
                    <h5>Single cell transcriptomics</h5>
                    <p>Visual exploration of the expression of genes at the single-cell resolution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="highlight" className="section-2 highlights image-center">
        <div className="container smaller">
          <div className="row text-center intro">
            <div className="col-12">
              <h2>Recent Highlight</h2>
              <p className="text-max-800">Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
            </div>
          </div>
          <div className="row text-start">
            <div className="col-12 gallery">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus molestie orci, non tristique orci dapibus non. Nulla tempor ullamcorper massa. Sed elementum lectus vitae faucibus dictum. Nulla ex ipsum, euismod quis ligula in, rhoncus imperdiet lorem. Proin vel eros vitae mi dictum ultricies. Nulla condimentum augue ut imperdiet ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas leo id lacus auctor, eu interdum elit lacinia. Praesent vel tellus neque. Phasellus a venenatis neque. Nullam a ex mollis, interdum sem lobortis, convallis eros.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
};

export default Home;