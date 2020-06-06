import React from 'react';

import Header from './Header';
import FeaturedPlaylists from './FeaturedPlaylists';
import Tracks from './Tracks';
import { PlaylistProvider } from '../context/PlaylistContext';

export default () => {
    return (
        <div className="column h-full">
            <Header />
            <PlaylistProvider>
                <FeaturedPlaylists />
                <Tracks />
            </PlaylistProvider>
        </div>
    )
}