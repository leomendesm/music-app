import React, { Component } from 'react'
import Track from "../../components/Track";
import './Tracks.scss'
import Api from '../../services/Api'

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        const { artist, album } = this.props.match.params
        Api.get(`/search?term=${artist}+${album}&entity=song&limit=10`).then(res => {
            console.log(res.data.results)
            const tracks = res.data.results.map(item => {
                return { picture: item.artworkUrl100, name: item.trackName, singer: item.artistName, millis: item.trackTimeMillis }
            })
            this.setState({tracks})
        })
    }

    render() {
        return (
            <div className="tracks">
                {this.state.tracks.map(a => <Track {...a} />)}
            </div>
        )
    }
}

export default Tracks