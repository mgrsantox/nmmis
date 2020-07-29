import { gql } from "@apollo/client";

export const PLACES_QUERY = gql`
    query Places($mid: String){
        places(mid: $mid){
            id
            properties{
                name
                image
            }
            geometry{
                type
                coordinates
            }
        }
    }
`;

export const WPLACES_QUERY = gql`
    query WPlaces($wid: String){
        wplaces(wid: $wid){
            id
            properties{
                name
                image
            }
            geometry{
                type
                coordinates
            }
        }
    }
`;