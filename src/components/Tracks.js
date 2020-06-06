import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import TrackItem from './TrackItem';
import { playlist } from '../context/PlaylistContext';
import { divideTracks } from '../helper';

export default () => {
    const { state: { selectedPlaylist } } = useContext(playlist);
    const auth = useQuery(GET_TOKEN).data;
    const accessToken = auth?.authenticate?.accessToken;
    const { data } = useQuery(FETCH_TRACKS, {
        context: {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        },
        variables: { id: selectedPlaylist?.id || "" }
    })
    let isMobile = window.innerWidth <= 480;
    const { list1, list2 } = isMobile
        ? { list1: data?.getTracks || [] }
        : divideTracks(data?.getTracks)

    const displayTrackItems = (tracks) => tracks.map((track) => (
        <TrackItem
            key={track.id}
            image={track.imageUrl}
            artist={track.artists?.map(artist => artist.name)?.join(', ')}
            duration={track.duration}
            name={track.name}
            previewUrl={track.audioPreview}
        />
    ))

    return list1 ? (
        <div className="container">
            <h1 className="heading">{selectedPlaylist?.name}</h1>
            <div className="row tracks">
                <div className={list2 ? 'col-2 container' : ''}>
                    {displayTrackItems(list1)}
                </div>
                {
                    list2 &&
                    <div className="col-2 container">
                        {displayTrackItems(list2)}
                    </div>
                }
            </div>
        </div>
    ) : null;
}

const FETCH_TRACKS = gql`
    query tracks($id: String!) {
        getTracks(playlistId: $id) {
            id
            name
            imageUrl
            artists {
                id
                name
            }
            duration
            audioPreview
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