import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const App = () => {
    const { loading, data } = useQuery(FETCH_TOKEN_QUERY);
    return <h1>Hello World</h1>
}

const FETCH_TOKEN_QUERY = gql`
    {
        authenticate {
            accessToken
            expiresIn
        }
    }
`;

export default App;