import gql from "graphql-tag";

const STUDIES_QUERY = gql`
  query Studies($pageIndex: Int!, $pageSize: Int!, $sortBy: [String]) {
    studies(sort: $sortBy, pagination: { page: $pageIndex, pageSize: $pageSize }) {
      data {
        id
        attributes {
          name
          slug
          publications {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }    
    }
  }
`;

export default STUDIES_QUERY;
