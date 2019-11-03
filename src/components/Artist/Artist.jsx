import React from 'react'
import PropTypes from 'prop-types';
import './Artist.scss'

const Artist = ({ name, img }) => (
    <div className="artist">
        <div className="artist__img">
            <img src={img} alt="" className="artist__img__first" />
            <img src={img} alt="" className="artist__img__second" />
        </div>
        <a href="#a">{name}</a>
    </div>
)

Artist.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Artist