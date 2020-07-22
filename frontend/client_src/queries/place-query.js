import { gql } from "@apollo/client";

export const PLACES_QUERY = gql`
    query Places($mid: String){
        places(mid: $mid){
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