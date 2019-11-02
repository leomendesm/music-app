import React, { Component } from 'react'
import Album from "../../components/Album";
import './Albums.scss'

class Albums extends Component {
    render() {
        return (
            <div className="albums">
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
            </div>
        )
    }
}

export default Albums