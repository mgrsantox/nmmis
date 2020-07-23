import { gql } from '@apollo/client';


export const MUNICIPAL_QUERY = gql`
query Municipal($mid: String){
    municipal(mid: $mid){
      properties{
        name
        hindu
        buddhist
        muslim
        other
        total
        male
        female
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
      total
      male
      female
    }
    geometry{
      type
      coordinates
    }
  }
}
`;

export const ROAD_QUERY = gql`
query Roads($mid: String){
  roads(mid: $mid){
    id
    properties{
      name
    }
    geometry{
      type
      coordinates
    }
  }
}
`;