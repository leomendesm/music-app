import React from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom'
const Menu  = () => (
    <ul className="menu">
        <NavLink to="/" exact activeClassName="selected">
            <li>Artists</li>
        </NavLink>
        <NavLink to="/albums" activeClassName="selected" onClick={e => e.preventDefault()}>
            <li>> Albums</li>
        </NavLink>
        <NavLink to="/tracks" activeClassName="selected" onClick={e => e.preventDefault()}>
            <li>> Tracks</li>
        </NavLink>
    </ul>
)

export default Menu