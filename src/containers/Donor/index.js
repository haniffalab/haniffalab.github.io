import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import { Tab, Nav, Row, Col, Container } from 'react-bootstrap';
import TableOfContents from '../../components/TableOfContents';
import { format } from "date-fns";
import Table from "../../components/Table";

import STUDY_QUERY from "../../queries/study/study";
import DONORS_QUERY from "../../queries/donor/donors";
import DONORS_COLUMNS from "../../utils/columns/donor";

const Donor = () => {

  let { id } = useParams();
  return (
    <div className="page-content">
      <Query query={STUDY_QUERY} id={id}>
        {({ data: { study } }) => {
          return (
            <Container id="study">
              <Row className="justify-content-center pt-5">
                <Col className="section-title">
                  <h1 className="mb-4">{study.data.attributes.name}</h1>
                  {study.data.attributes.publications.data.map(function (d) {
                    return (
                      <div key={d.id}>
                        <p className="text-muted">
                          {d.attributes.journal.data.attributes.title}&nbsp;&#8226;&nbsp;
                          {format(Date.parse(d.attributes.date), 'dd MMMM yyyy')}&nbsp;&#8226;&nbsp;
                          Vol {d.attributes.volume}, Issue {d.attributes.issue}&nbsp;&#8226;&nbsp;
                          <a href={d.attributes.url} className="text-reset">DOI: {d.attributes.doi}</a>
                        </p>
                        <p>{d.attributes.abstract}</p>
                      </div>
                    )
                  })}
                </Col>
              </Row>
              <Row className="justify-content-center py-5">
                <Col lg={3} className="d-none d-lg-block">
                  <TableOfContents />
                </Col>
                <Col lg={9}>
                  <h2 id="analysis-header" className="mb-5">Analysis</h2>

                  <h2 id="data-header" className="my-5">Raw Data</h2>

                  <h2 id="donor-header" className="my-5">Donors</h2>
                  <Query
                    query={DONORS_QUERY}
                    pageIndex={1}
                    pageSize={2}
                    sortBy={"name:asc"}
                  >
                    {({ data: { donors } }) => {
                      return <Table
                        columns={DONORS_COLUMNS}
                        data={donors.data}
                      />
                    }}
                  </Query>

                  <Tab.Container id="left-tabs-example" defaultActiveKey="datasets">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="datasets">Datasets</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="donors">Donors</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="organs">Organs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="samples">Samples</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="datasets">
                        Datasets
                      </Tab.Pane>
                      <Tab.Pane eventKey="donors">
                        Donors
                      </Tab.Pane>
                      <Tab.Pane eventKey="organs">
                        Organs
                      </Tab.Pane>
                      <Tab.Pane eventKey="samples">
                        Samples
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <h2 id="third-header2" className="mt-5">Code</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed turpis vel nunc malesuada tincidunt ac quis magna. Maecenas euismod lorem vitae nisi semper mattis id tempus velit. Aliquam id suscipit leo.</p>

                  <h2 id="third-3" className="mt-5">Contributors</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed turpis vel nunc malesuada tincidunt ac quis magna. Maecenas euismod lorem vitae nisi semper mattis id tempus velit. Aliquam id suscipit leo. Vestibulum tincidunt nisi vitae dictum hendrerit. Nulla id ipsum tempus, vulputate ante sit amet, porta turpis. Fusce non ipsum sit amet est sodales lobortis id vitae lorem. Etiam vestibulum, justo eu venenatis malesuada, enim risus dictum velit, quis facilisis nulla sem sit amet dolor. Curabitur commodo scelerisque urna vitae condimentum. Sed sodales mauris et lorem aliquet convallis.

                    Mauris ac neque maximus, interdum elit id, condimentum libero. Quisque efficitur urna a sem malesuada, nec tincidunt ante facilisis. Suspendisse posuere augue arcu, sed tincidunt elit ornare sit amet. Nullam nec enim condimentum, faucibus augue nec, tincidunt sem. Proin ut nisi odio. Quisque sagittis nunc sapien, vitae luctus risus dapibus et. Nam non maximus magna, in eleifend eros. Quisque finibus felis non felis accumsan, eget iaculis lorem auctor. Morbi a tempus mi. Pellentesque dignissim rhoncus metus id eleifend. Nullam pellentesque id nibh in accumsan. Vivamus tempus, sapien sit amet fringilla ultricies, odio velit ultricies libero, quis consequat ipsum nibh id nibh. Proin a neque consequat, mattis sapien eget, congue nulla. In eu gravida purus. Duis rhoncus hendrerit mi, eu semper erat egestas nec.

                    Pellentesque sit amet volutpat ipsum. Phasellus et orci est. Morbi sit amet malesuada nulla, in blandit dolor. Nam ligula lectus, iaculis quis tincidunt non, ultrices eu ligula. Aliquam lacinia, ipsum vel sollicitudin accumsan, arcu elit blandit odio, vel laoreet purus nunc ac est. In elementum ante venenatis, ullamcorper lorem a, feugiat diam. Proin sollicitudin risus porta leo pharetra viverra.</p>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Query>
    </div >
  );
};

export default Donor;
