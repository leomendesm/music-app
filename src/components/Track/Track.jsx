import React from 'react'
import './Track.scss'
import Placeholder from './img.jpg'
const Track = () => (
    <div className="track">
        <img src={Placeholder} alt="" />
        <div className="name">
            <p className="music">Music name</p>
            <p className="singer">Singer</p>
        </div>
        <p className="timer">3:30</p>
    </div>
)

export default Track