import React from "react";
import { useParams } from "react-router";
import Studies from "../../components/Studies";
import Query from "../../components/Query";
import CATEGORY_STUDIES_QUERY from "../../queries/category/studies";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_STUDIES_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Studies studies={category.studies} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;
