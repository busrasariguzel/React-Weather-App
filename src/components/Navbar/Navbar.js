import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext} from '../Context/ThemeContext'

// import "./Navbar.css" ;

export default class NavBar extends Component {
    static contextType = ThemeContext

    render() {
        console.log('this context...', this.context)
        return <nav style={{

        }}>
            <NavLink to="/" activeClassName="selected" activeStyle={{fontWeight: 'bold'}} exact>
            Home
            </NavLink> 	&nbsp; 	&nbsp; 	&nbsp;
            <NavLink to="/signin" activeStyle={{fontWeight: 'bold'}} activeClassName="selected" exact>
                Sign in
            </NavLink> 	&nbsp; 	&nbsp; 	&nbsp;
            <NavLink to="/signup" activeClassName="selected" activeStyle={{fontWeight: 'bold'}} exact>
                Sign up
            </NavLink> 	&nbsp; 	&nbsp; 	&nbsp;
        </nav>
    }
}

