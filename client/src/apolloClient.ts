
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient(
    {
        uri: 'http://localhost:8080/api/graphql',
        cache: new InMemoryCache(),
        connectToDevTools: true,
    },
);

export default client;
