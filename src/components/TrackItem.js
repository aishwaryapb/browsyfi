import React from 'react';
import { msToTime } from '../helper';

export default ({ image, name, duration, artist, previewUrl }) => (
    <div className="row mb">
        <div className="col-1 text-center">
            <img src={image} alt="track" className="thumbnail" />
        </div>
        <div className="col-2">
            <h4 className={`m0 ${previewUrl ? 'track-name' : ''}`} onClick={() => {
                if (previewUrl) window.open(previewUrl, "_blank")
            }}>{name}</h4>
            <h6 className="m0 artist">{artist}</h6>
        </div>
        <div className="col-1 text-center">
            {msToTime(duration)}
        </div>
    </div>

)