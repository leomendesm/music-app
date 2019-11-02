import React from 'react'
import Placeholder from './img.jpg'
import './Album.scss'

const Album = () => (
    <div className="album">
        <div className="album__img">
            <img src={Placeholder} alt="" className="album__img__first" />
            <img src={Placeholder} alt="" className="album__img__second" />
        </div>
        <a href="#a">Fifth Harmony</a>
        <p>Fifth Harmony</p>
    </div>
)

export default Album