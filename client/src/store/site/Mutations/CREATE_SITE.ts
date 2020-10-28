import { gql } from '@apollo/client';

export const CREATE_SITE = gql`
    mutation createSite($text: String!) {
        createSite(name: $text) {
            name
        }
    }
`;
