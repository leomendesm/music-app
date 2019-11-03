import React from 'react'
import './Album.scss'

const Album = ({name, singer, picture}) => (
    <div className="album">
        <div className="album__img">
            <img src={picture} alt="" className="album__img__first" />
            <img src={picture} alt="" className="album__img__second" />
        </div>
        <a href="#a">{name}</a>
        <p>{singer}</p>
    </div>
)

export default Album