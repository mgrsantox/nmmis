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


export const WARDS_QUERY = gql`
query Wards($mid: String){
  wards(mid: $mid){
    id
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