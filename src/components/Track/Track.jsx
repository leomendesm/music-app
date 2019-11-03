import React from 'react'
import PropTypes from 'prop-types'
import './Track.scss'

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const Track = ({picture, name, singer, millis}) => (
    <div className="track">
        <img src={picture} alt="" />
        <div className="name">
            <p className="music">{name}</p>
            <p className="singer">{singer}</p>
        </div>
        <p className="timer">{millisToMinutesAndSeconds(millis)}</p>
    </div>
)

Track.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    millis: PropTypes.number.isRequired,
}

export default Track