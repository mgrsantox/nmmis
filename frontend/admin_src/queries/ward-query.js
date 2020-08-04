import { gql} from '@apollo/client';




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