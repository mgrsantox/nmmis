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


export const WARD_QUERY = gql`
query Ward($wid: String){
  ward(wid: $wid){
    id
    properties{
      name
      area
      total
      male
      female
      hindu
      muslim
      buddhist
      other
      municipal{
        properties{
          name
          area
        }
      }
      buildingSet{
        id
      }
      roadSet{
        id
      }
      telecomSet{
        id
      }
      transformerSet{
        id
      }
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

export const WARD_ROAD_QUERY = gql`
query WRoads($wid: String){
  wroads(wid: $wid){
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

export const TELECOM_QUERY = gql`
query Telecoms($mid: String){
  telecoms(mid: $mid){
    id
    properties{
      type
    }
    geometry{
      type
      coordinates
    }
  }
}
`;

export const WTELECOM_QUERY = gql`
query WTelecoms($wid: String){
  wtelecoms(wid: $wid){
    id
    properties{
      type
    }
    geometry{
      type
      coordinates
    }
  }
}
`;


export const TRANSFORMER_QUERY = gql`
query Transformers($mid: String){
  transformers(mid: $mid){
    id
    properties{
      type
    }
    geometry{
      type
      coordinates
    }
  }
}
`;

export const WTRANSFORMER_QUERY = gql`
query WTransformers($wid: String){
  wtransformers(wid: $wid){
    id
    properties{
      type
    }
    geometry{
      type
      coordinates
    }
  }
}
`;