import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <NavLink exact to='/activity' activeClassName='active'/>
        <NavLink exact  to='/universities' activeClassName='active' />
        <NavLink exact  to='/' activeClassName='active'/>
        </>
    )
}

export default Nav;