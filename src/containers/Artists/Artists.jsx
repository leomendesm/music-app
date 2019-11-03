import React, { Component } from 'react'
import Artist from "../../components/Artist";
import './Artists.scss'
import Data from './Data.json'
class Artists extends Component {
    render() {
        return (
            <div className="artists">
                {Data.map((i, index) => <Artist name={i.name} img={i.picture} key={index}/>)}
            </div>
        )
    }
}

export default Artists