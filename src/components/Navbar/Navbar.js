import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

// import "./Navbar.css" ;

export default class NavBar extends Component {
    render() {
        return <nav>
            <NavLink to="/" activeClassName="selected" activeStyle={{fontWeight: 'bold'}} exact>
            home
            </NavLink>
            <NavLink to="/signin" activeStyle={{fontWeight: 'bold'}} activeClassName="selected" exact>
                sign in
            </NavLink>
            <NavLink to="/signup" activeClassName="selected" activeStyle={{fontWeight: 'bold'}} exact>
                sign up
            </NavLink>
        </nav>
    }
}

