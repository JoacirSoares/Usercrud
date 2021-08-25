/* eslint-disable import/no-anonymous-default-export */
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu" >
            <Link to="/">
                <i className={`fa fa-${props.iconPrincipal}`}></i>
                {props.titlePrincipal}
            </Link>
            <Link to="/users">
                <i className={`fa fa-${props.iconUsers}`}></i>
                {props.titleUsers}
            </Link>
        </nav>
    </aside>