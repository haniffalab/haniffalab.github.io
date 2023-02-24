import gql from "graphql-tag";

const CATEGORY_STUDIES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      name
      studies {
        id
        title
        content
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_STUDIES_QUERY;
