import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from './Layout';
import Loader from './Loader';

const App = () => {

    const { loading } = useQuery(FETCH_TOKEN_QUERY)

    return (
        <div className="main">
            {loading ? <Loader /> : <Layout />}
        </div>
    )
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