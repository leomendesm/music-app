import React, { Component } from 'react'
import Artist from "../../components/Artist";
import './Artists.scss'

class Artists extends Component {
    render() {
        return (
            <div className="artists">
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
        )
    }
}

export default Artists