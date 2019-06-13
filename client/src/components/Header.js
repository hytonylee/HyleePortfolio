import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <NavLink to='/' activeClassName="is-active"><h1>HYLee</h1></NavLink>
        <NavLink to='/Dashboard' activeClassName="is-active">Dashboard</NavLink>
        <NavLink to='/Portfolio' activeClassName="is-active">Portfolio</NavLink>
        <NavLink to='/CreatePost' activeClassName="is-active">Create Post</NavLink>
        <NavLink to='/Blog' activeClassName="is-active">Blog</NavLink>
        <NavLink to='/Contact' activeClassName="is-active">Contact</NavLink>
    </header>
)

export default Header;