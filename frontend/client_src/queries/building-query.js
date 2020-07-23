import { gql } from "@apollo/client";

export const BUILDINGS_QUERY = gql`
    query Buildings($mid: String){
        buildings(mid: $mid){
            id
            properties{
                name
                catg
                image
            }
            geometry{
                type
                coordinates
            }
        }
    }
`;