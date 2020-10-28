import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import client from "../apolloClient";
import {ApolloProvider} from "@apollo/client";

test('renders learn react link', () => {
    const {getByText} = render(
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    );
    const linkElement = getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
});
