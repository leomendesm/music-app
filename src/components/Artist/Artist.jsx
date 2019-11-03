import React from 'react'
import PropTypes from 'prop-types';
import './Artist.scss'
import { Link } from 'react-router-dom'
const Artist = ({ name, img }) => (
    <Link to={`/albums/${name}`}>
        <div className="artist">
            <div className="artist__img">
                <img src={img} alt="" className="artist__img__first" />
                <img src={img} alt="" className="artist__img__second" />
            </div>
            <Link to={`/albums/${name}`}>
                {name}
            </Link>
        </div>
    </Link>
)

Artist.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Artist