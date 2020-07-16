import { gql } from '@apollo/client';


export const COUNTRY_QUERY = gql `
	{
		country{
			type
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