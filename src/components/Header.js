import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">>
                <NavLink to='/' activeClassName="is-active"><h1 className='header__title'>HYLee</h1></NavLink>
                <NavLink to='/Dashboard' activeClassName="is-active">Dashboard</NavLink>
                <NavLink to='/CreatePost' activeClassName="is-active">Create Post</NavLink>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);