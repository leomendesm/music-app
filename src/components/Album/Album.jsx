import React from 'react'
import PropTypes from 'prop-types'
import './Album.scss'
import { Link } from 'react-router-dom'

const Album = ({name, singer, picture}) => (
    <Link to={`/tracks/${name}/${singer}`}>
        <div className="album">
            <div className="album__img">
                <img src={picture} alt="" className="album__img__first" />
                <img src={picture} alt="" className="album__img__second" />
            </div>
            <p className="album__name">{name}</p>
            <p className="album__singer">{singer}</p>
        </div>
    </Link>
)

Album.propTypes = {
    name: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

export default Album