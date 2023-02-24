import React from "react";
import { Link } from "react-router-dom";

const Card = ({ study }) => {
  return (
    <div className="row">
      <div className="cell" data-title="Collection">
        <Link to={`/study/${study.id}`} className="row">{study.attributes.name}</Link>
      </div>
      <div className="cell nowrap" data-title="Tissue">
      </div>
      <div className="cell nowrap" data-title="Assay">
      </div>
      <div className="cell" data-title="Organism">
      </div>
    </div>
  );
};

export default Card;
