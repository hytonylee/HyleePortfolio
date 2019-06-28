import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <NavLink to='/' activeClassName="is-active"><h1>HYLee</h1></NavLink>
        <NavLink to='/Portfolio' activeClassName="is-active">Portfolio</NavLink>
        <NavLink to='/Dashboard' activeClassName="is-active">Dashboard</NavLink>
        <NavLink to='/CreatePost' activeClassName="is-active">Create Post</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);