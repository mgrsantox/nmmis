import { gql } from "@apollo/client";

export const BUILDINGS_QUERY = gql`
    query Buildings($mid: String){
        buildings(mid: $mid){
            id
            properties{
                name
                catg
                image
                buildingNo
                subCatg
                landArea
                buildArea
                buildDate
                roofType
                floor
                toilet
                roadAccess
                electAccess
            }
            geometry{
                type
                coordinates
            }
        }
    }
`;

export const WBUILDINGS_QUERY = gql`
    query WBuildings($wid: String){
        wbuildings(wid: $wid){
            id
            properties{
                name
                catg
                image
                buildingNo
                subCatg
                landArea
                buildArea
                buildDate
                roofType
                floor
                toilet
                roadAccess
                electAccess
            }
            geometry{
                type
                coordinates
            }
        }
    }
`;