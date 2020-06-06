import React from 'react';
import Carousel from "react-multi-carousel";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const responsive = {
    largeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 320 },
        items: 2
    },
    smallMobile: {
        breakpoint: { max: 320, min: 0 },
        items: 1
    }
};

export default () => {
    const { data: { authenticate: auth } } = useQuery(GET_TOKEN);
    const { data } = useQuery(FETCH_FEATURED_PLAYLISTS, {
        context: {
            headers: {
                "Authorization": `Bearer ${auth.accessToken}`
            }
        }
    });
    const playlists = data?.getPlaylists;
    return (
        <div className="featured-playlists container">
            <h1 className="heading">Featured Playlists</h1>
            {
                playlists &&
                <Carousel responsive={responsive} infinite swipeable>
                    {
                        playlists.map(playlist => (
                            <div key={playlist.id} className="playlist-container">
                                <img src={playlist.imageUrl} alt="playlist-cover" className="playlist-img" />
                                <div className="playlist-overlay">{playlist.name}</div>
                            </div>
                        ))
                    }
                </Carousel>
            }
        </div>
    );
}

const FETCH_FEATURED_PLAYLISTS = gql`
    {
        getPlaylists {
            id
            name
            imageUrl
        }
    }
`;

const GET_TOKEN = gql`
    {
        authenticate @client {
            accessToken 
        }
    }
`;