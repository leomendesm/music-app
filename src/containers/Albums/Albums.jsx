import React, { Component } from 'react'
import Album from "../../components/Album";
import './Albums.scss'
import Api from '../../services/Api'

class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        const { artist } = this.props.match.params
        Api.get(`/search?term=${artist}&entity=album&limit=10`).then(res => {
            const albums = res.data.results.map(item => {
                const picture = item.artworkUrl100.replace("100x100bb.jpg", "300x300bb.jpg")
                return { picture, name: item.collectionName, singer: item.artistName }
            })
            this.setState({albums})
        })
    }

    render() {

        return (
            <div className="albums">
                {this.state.albums.map(a => <Album {...a} />)}
            </div>
        )
    }
}

export default Albums