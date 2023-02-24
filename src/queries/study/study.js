import gql from "graphql-tag";

const STUDY_QUERY = gql`
  query Studies($slug: String!) {
    studies(filters: { slug: { eq: $slug } }) {
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
                      name,
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

export default STUDY_QUERY;
