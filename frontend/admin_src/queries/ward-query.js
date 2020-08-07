import { gql} from '@apollo/client';



export const WARDS_TABLE_QUERY = gql`
query Wards($mid: String){
  wards(mid: $mid){
    id
    properties{
      name
      headquarter
      area
      total
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
      headquarter
      total
      male
      female
      hindu
      muslim
      buddhist
      other
    }
    geometry{
      type
      coordinates
    }
  }
}
`;




export const ADDWARD_QUERY = gql`
    mutation addWard($name: String, $headquarter: String, $area: Int, $total: Int, $male: Int, $female: Int, $hindu: Int, $muslim: Int, $buddhist: Int, $other: Int, $file:Upload ){
        addWard(name:$name, headquarter:$headquarter, area:$area,total:$total, male:$male, female:$female, hindu:$hindu, muslim:$muslim, buddhist:$buddhist, other:$other, file:$file){
            ward{
            id
            properties{
              name
              area
            }
        } 
        }
    }
`;


export const CHANGEWARD_QUERY = gql`
    mutation changeWard($wid: String,$name: String, $headquarter: String, $area: Int, $total: Int, $male: Int, $female: Int, $hindu: Int, $muslim: Int, $buddhist: Int, $other: Int, $file:Upload ){
        changeWard(wid:$wid,name:$name, headquarter:$headquarter, area:$area,total:$total, male:$male, female:$female, hindu:$hindu, muslim:$muslim, buddhist:$buddhist, other:$other, file:$file){
            ward{
            id
            properties{
              name
              area
            }
        } 
        }
    }
`;

export const DELETE_WARD_QUERY = gql`
  mutation changeWard($id: String){
    deleteWard(id:$id){
      wId
    }
  }
`;