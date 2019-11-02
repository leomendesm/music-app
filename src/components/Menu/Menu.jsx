import React from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom'
const Menu  = () => (
    <ul className="menu">
        <NavLink to="/" activeClassName="selected">
            <li>Artists</li>
        </NavLink>
        <li>Albums</li>
        <li>Tracks</li>
    </ul>
)

export default Menu