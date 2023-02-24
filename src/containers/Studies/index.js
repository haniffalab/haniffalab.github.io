import React, { useCallback, useState, useRef, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { useLazyQuery } from "react-apollo";

import Table from "../../components/Table";

import STUDIES_QUERY from "../../queries/study/studies";
import STUDIES_COLUMNS from "../../utils/columns/study";

const Home = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [pageCount, setPageCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [sortBy, setSortBy] = useState('name:asc');
  const [data, setData] = useState([]);

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
    fetchStudies();
  }, []);

  const handleSort = useCallback(({ sortBy, pageIndex, pageSize }) => {
    if (sortBy.length > 0) {
      const sort = sortBy.map((sort) => sort.id.replace("attributes.", "") + ":" + (sort.desc ? 'desc' : 'asc'));
      console.log(sort.join())
      setSortBy(sort.join());
    }
  }, []);

  const [fetchStudies, { loading }] = useLazyQuery(
    STUDIES_QUERY,
    {
      variables: {
        pageIndex: pageIndex + 1,
        pageSize: pageSize,
        sortBy: sortBy
      },
      onCompleted: result => {
        setData(result.studies.data)
        setPageCount(result.studies.meta.pagination.pageCount)
        setItemCount(result.studies.meta.pagination.total)
      },
    }
  );

  return (
    < div >
      {/* Skills */}
      < section id="skills" className="section-1 counter skills" >
        <div className="container">
          <div className="row text-center intro">
            <div className="col-12">
              <h2 className="super effect-static-text">Main Skills</h2>
              <p className="text-max-800">We see all types of projects as if they were ours. This brings us closer to our clients' projects bringing much more confidence and commitment.</p>
            </div>
          </div>
          <div data-aos-id="counter" data-aos="fade-up" data-aos-delay={200} className="row justify-content-center text-center items">
            <div className="col-12 col-md-6 col-lg-3 item">
              <div data-percent={42} className="radial">
                <span />
              </div>
              <h4>Marketing</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-3 item">
              <div data-percent={60} className="radial">
                <span />
              </div>
              <h4>Branding</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-3 item">
              <div data-percent={84} className="radial">
                <span />
              </div>
              <h4>Web Design</h4>
            </div>
            <div className="col-12 col-md-6 col-lg-3 item">
              <div data-percent={100} className="radial">
                <span />
              </div>
              <h4>WordPress</h4>
            </div>
          </div>
        </div>
      </section >
      {/* Services */}
      < section id="services" className="section-2 odd offers featured custom" >
        <div className="container">
          <div className="row intro">
            <div className="col-12 col-md-9 align-self-center text-center text-md-left">
              <h2 className="super effect-static-text">Our Services</h2>
              <p>Focused on results we seek to raise the level of our customers.</p>
            </div>
            <div className="col-12 col-md-3 align-self-end">
              <a href="#" className="btn mx-auto mr-md-0 ml-md-auto primary-button"><i className="icon-grid" />VIEW ALL</a>
            </div>
          </div>
          <div className="row justify-content-center text-center items">
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card featured">
                <i className="icon icon-globe" />
                <h4>Website Pro</h4>
                <p>We build professional responsive websites optimized for the most popular search engines.</p>
                <a href="#"><i className="btn-icon icon-arrow-right-circle" /></a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card">
                <i className="icon icon-basket" />
                <h4>E-Commerce</h4>
                <p>Increase your sales with an incredible online store, full of features and functionality.</p>
                <a href="#"><i className="btn-icon icon-arrow-right-circle" /></a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card">
                <i className="icon icon-screen-smartphone" />
                <h4>Mobile Apps</h4>
                <p>Follow the global trend and create your revolutionary mobile app built with the best technologies.</p>
                <a href="#"><i className="btn-icon icon-arrow-right-circle" /></a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card">
                <i className="icon icon-layers" />
                <h4>Web Application</h4>
                <p>We build applications for different purposes using technologies that allow you more security.</p>
                <a href="#"><i className="btn-icon icon-arrow-right-circle" /></a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card">
                <i className="icon icon-chart" />
                <h4>Digital Marketing</h4>
                <p>We work to promote your brand in partnership with the best marketing platforms today.</p>
                <a href="#"><i className="btn-icon icon-arrow-right-circle" /></a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 item">
              <div className="card featured">
                <i className="icon icon-bulb" />
                <h4>Brand Creation</h4>
                <p>We create your brand thinking about your target audience using design techniques.</p>
                <a href="#"><i className="btn-icon icon-arrow-right-circle" /></a>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* Team */}
      < section id="team" className="section-4 carousel featured card-white" >
        <div className="overflow-holder">
          <div className="container">
            <div className="row text-center intro">
              <div className="col-12">
                <h2 className="super effect-static-text">Team of Experts</h2>
                <p className="text-max-800">Our team will help you define a stand-out creative direction and will translate it into visual assets that will resonate with your audience.</p>
              </div>
            </div>
            <div className="swiper-container mid-slider-simple items">
              <div className="swiper-wrapper">
                <div className="swiper-slide slide-center text-center item">
                  <div className="row card">
                    <div className="col-12">
                      <img src="assets/images/team-1.jpg" alt="Adams Baker" className="person" />
                      <h4>Adams Baker</h4>
                      <p>CEO / CO-FOUNDER</p>
                      <ul className="navbar-nav social share-list ml-auto">
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="icon-social-instagram" /></a>
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
                  </div>
                </div>
                <div className="swiper-slide slide-center text-center item">
                  <div className="row card">
                    <div className="col-12">
                      <img src="assets/images/team-2.jpg" alt="Mary Evans" className="person" />
                      <h4>Mary Evans</h4>
                      <p>CONTROLLING / FOUNDER</p>
                      <ul className="navbar-nav social share-list ml-auto">
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="icon-social-instagram" /></a>
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
                  </div>
                </div>
                <div className="swiper-slide slide-center text-center item">
                  <div className="row card">
                    <div className="col-12">
                      <img src="assets/images/team-3.jpg" alt="Sarah Lopez" className="person" />
                      <h4>Sarah Lopez</h4>
                      <p>HUMAN RESOURCES</p>
                      <ul className="navbar-nav social share-list ml-auto">
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="icon-social-instagram" /></a>
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
                  </div>
                </div>
                <div className="swiper-slide slide-center text-center item">
                  <div className="row card">
                    <div className="col-12">
                      <img src="assets/images/team-4.jpg" alt="Joseph Hills" className="person" />
                      <h4>Joseph Hills</h4>
                      <p>CFO / CHIEF FINANCIAL</p>
                      <ul className="navbar-nav social share-list ml-auto">
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="icon-social-instagram" /></a>
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
                  </div>
                </div>
                <div className="swiper-slide slide-center text-center item">
                  <div className="row card">
                    <div className="col-12">
                      <img src="assets/images/team-5.jpg" alt="Karen Usman" className="person" />
                      <h4>Karen Usman</h4>
                      <p>CTO / CHIEF MARKETING</p>
                      <ul className="navbar-nav social share-list ml-auto">
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="icon-social-instagram" /></a>
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
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section >
      {/* Subscribe */}
      < section id="subscribe" className="section-5 subscribe" >
        <div className="container smaller">
          <div className="row text-center intro">
            <div className="col-12">
              <h2 className="super effect-static-text">Newsletter</h2>
              <p className="text-max-800">Subscribe to our newsletter and follow our content closely. Receive news based on what has to do with you. We promise not to send promotions you don't like.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <form action="php/form.php" id="leverage-subscribe" className="row m-auto items">
                <input type="hidden" name="section" defaultValue="leverage_subscribe" />
                <input type="hidden" name="reCAPTCHA" />
                {/* Remove this field if you want to disable recaptcha */}
                <div className="col-12 col-lg-5 m-lg-0 input-group align-self-center item">
                  <input type="text" name="name" className="form-control field-name" placeholder="Name" />
                </div>
                <div className="col-12 col-lg-5 m-lg-0 input-group align-self-center item">
                  <input type="email" name="email" className="form-control field-email" placeholder="Email" />
                </div>
                <div className="col-12 col-lg-2 m-lg-0 input-group align-self-center item">
                  <a className="btn primary-button w-100">SUBSCRIBE</a>
                </div>
                <div className="col-12 text-center">
                  <span className="form-alert mt-5 mb-0" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;