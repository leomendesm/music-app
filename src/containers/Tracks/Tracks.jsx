import React, { Component } from 'react'
import Track from "../../components/Track";
import './Tracks.scss'

class Tracks extends Component {
    render() {
        return (
            <div className="tracks">
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
        )
    }
}

export default Tracks