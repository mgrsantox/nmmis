import { gql } from '@apollo/client';


export const PROVINCES_QUERY = gql `
{
    provinces{
        id
      geometry{
        type
        coordinates
      }
      properties{
        name
      }
    }
  }
`;