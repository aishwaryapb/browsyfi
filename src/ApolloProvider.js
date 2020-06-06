import React from 'react';
import App from './components/App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_SERVER_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    resolvers: {}
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)