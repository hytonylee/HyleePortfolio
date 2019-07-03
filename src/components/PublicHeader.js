import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicHeader = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <NavLink to='/' activeClassName="is-active"><h1 className='header__title'>HYLee</h1></NavLink>
            </div>
        </div>
    </header>
)

export default PublicHeader;