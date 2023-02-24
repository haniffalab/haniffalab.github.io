import React from "react";
import { Link } from "react-router-dom";

const STUDIES_COLUMNS = [
  {
    Header: "Name",
    accessor: "attributes.name",
    Cell: ({ value, row }) => {
      return <Link to={`/study/${row.original.attributes.slug}`} className="row">{value}</Link>
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
];

export default STUDIES_COLUMNS;