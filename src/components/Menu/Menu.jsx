import React from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom'
const Menu  = () => (
    <ul className="menu">
        <NavLink to="/" exact activeClassName="selected">
            <li>Artists</li>
        </NavLink>
        <NavLink to="/albums" activeClassName="selected">
            <li>> Albums</li>
        </NavLink>
        <NavLink to="/tracks" activeClassName="selected">
            <li>> Tracks</li>
        </NavLink>
    </ul>
)

export default Menu