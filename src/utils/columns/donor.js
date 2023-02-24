import React from "react";
import { Link } from "react-router-dom";

const DONORS_COLUMNS = [
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
];

export default DONORS_COLUMNS;