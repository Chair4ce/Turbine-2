import { gql } from '@apollo/client';

export const FETCH_SITES = gql`
    query getSites{
        sites {
            id
            name
        }
    }
`;
