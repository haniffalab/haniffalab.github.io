import React, { useCallback, useState, useMemo } from "react";
import DONORS_QUERY from "../../queries/donor/donors";
import { Row, Col, Container } from 'react-bootstrap';
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { useLazyQuery } from "react-apollo";


const Donors = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [pageCount, setPageCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [sortBy, setSortBy] = useState('name:asc');
  const [data, setData] = useState([]);

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
    fetchDonors();
  }, []);

  const [fetchDonors, { loading }] = useLazyQuery(
    DONORS_QUERY,
    {
      variables: {
        pageIndex: pageIndex + 1,
        pageSize: pageSize,
        sortBy: sortBy
      },
      onCompleted: result => {
        console.log('execQuery has completed'); // only fires the first time
        setData(result.donors.data)
        setPageCount(result.donors.meta.pagination.pageCount)
        setItemCount(result.donors.meta.pagination.total)
      },
    }
  );

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "attributes.name",
        Cell: ({ value, row }) => {
          return <Link to={`/donor/${row.original.id}`} className="row">{value}</Link>
        }
      },
      {
        Header: "Tissue",
        accessor: "Tissue"
      },
      {
        Header: "Assay",
        accessor: "Assay"
      },
      {
        Header: "Organism",
        accessor: "Organism"
      }
    ],
    []
  );

  const handleSort = useCallback(({ sortBy, pageIndex, pageSize }) => {
    if (sortBy.length > 0) {
      const sort = sortBy.map((sort) => sort.id.replace("attributes.", "") + ":" + (sort.desc ? 'desc' : 'asc'));
      console.log(sort.join())
      setSortBy(sort.join());
    }
  }, []);

  return (
    <>
      <div className="page-content">
        <Container id="donors" fluid>
          <Row className="justify-content-center py-5">
            <Col lg={8} md={10} className="section-title">
              <h3 className="mb-4">Donors</h3>
              <p>Collections display a curated set of datasets that contribute to a publication. Data can be
                visualised with interactive software, or downloaded for further interrogation.</p>
            </Col>
          </Row>
          <Row className="justify-content-center py-5">
            <Col md={10}>
              <Table
                columns={columns}
                data={data}
                fetchData={fetchData}
                onSort={handleSort}
                loading={loading}
                pageCount={pageCount}
                total={itemCount}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Donors;