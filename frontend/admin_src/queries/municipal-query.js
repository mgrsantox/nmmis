import { gql} from '@apollo/client';

export const ADDMUNICIPAL_QUERY = gql`
    mutation addMunicipal($name: String, $headquarter: String, $area: Int, $total: Int, $male: Int, $female: Int, $hindu: Int, $muslim: Int, $buddhist: Int, $other: Int, $file:Upload ){
        addMunicipal(name:$name, headquarter:$headquarter, area:$area,total:$total, male:$male, female:$female, hindu:$hindu, muslim:$muslim, buddhist:$buddhist, other:$other, file:$file){
            municipal{
      			id
      			properties{
      				name
      				area
      			}
    		} 
        }
    }
`;