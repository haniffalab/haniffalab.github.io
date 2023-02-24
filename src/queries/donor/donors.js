import gql from "graphql-tag";

const DONORS_QUERY = gql`
  query Donors($pageIndex: Int!, $pageSize: Int!, $sortBy: [String]) {
    donors(sort: $sortBy, pagination: { page: $pageIndex, pageSize: $pageSize }) {
      data {
        id
        attributes {
          name
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

export default DONORS_QUERY;
