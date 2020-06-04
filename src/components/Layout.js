import React from 'react';

import Header from './Header';
import FeaturedPlaylists from './FeaturedPlaylists';
import Tracks from './Tracks';

export default () => {
    return (
        <div className="column h-full">
            <Header />
            <FeaturedPlaylists />
            <Tracks />
        </div>
    )
}