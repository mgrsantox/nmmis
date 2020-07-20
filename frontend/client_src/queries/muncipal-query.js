import { gql } from '@apollo/client';


export const MUNICIPAL_QUERY = gql`
query Municipal($mid: String){
    municipal(mid: $mid){
      properties{
        name
        area
      }
      geometry{
        type
        coordinates
      }
    }
  }
`;