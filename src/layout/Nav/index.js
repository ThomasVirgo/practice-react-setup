import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const Nav = () => {
    return (
        <div className='nav-container'>
        <NavLink className = 'nav-link' exact to='/activity' activeClassName='active'>Activity</NavLink>
        <NavLink className = 'nav-link' exact  to='/universities' activeClassName='active'>Universities</NavLink>
        <NavLink className = 'nav-link' exact  to='/' activeClassName='active'>Home</NavLink>
        </div>
    )
}

export default Nav;