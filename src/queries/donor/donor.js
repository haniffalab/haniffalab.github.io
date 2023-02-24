import gql from "graphql-tag";

const DONOR_QUERY = gql`
  query Donors($id: ID!) {
    donor(id: $id) {
      data {
        id
        attributes {
          name
          publications {
            data {
              id
              attributes {
                title,
                date,
                journal {
                  data {
                    id
                    attributes {
                      title,
                    }
                  }
                } 
                doi,
                url,
                volume,
                issue,
                abstract
              }
            }
          }  
          datasets {
            data {
              id
              attributes {
                name,
                description
              }
            }
          }         
        }
      }
    }
  }
`;

export default DONOR_QUERY;
