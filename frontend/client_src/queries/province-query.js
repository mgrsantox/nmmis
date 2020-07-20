import { gql } from '@apollo/client';


export const PROVINCES_QUERY = gql`
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

export const PROVINCE_QUERY = gql`
query Province($pid: String){
  province(pid: $pid){
    properties{
      name
      districtSet{
        properties{
          name
        }
        geometry {
          type
          coordinates
        }
      }
      area
    }
    geometry{
      type
      coordinates
    }
  }
}
`;