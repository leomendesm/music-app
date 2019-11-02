import React from 'react'
import Placeholder from './img.jpg'
import './Artist.scss'

const Artist = () => (
    <div className="artist">
        <div className="artist__img">
            <img src={Placeholder} alt="" className="artist__img__first" />
            <img src={Placeholder} alt="" className="artist__img__second" />
        </div>
        <a href="#a">Fifth Harmony</a>
    </div>
)

export default Artist