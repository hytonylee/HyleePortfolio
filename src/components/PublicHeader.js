import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicHeader = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <h1 className='header-title'><NavLink to='/'><img className="header-logo" src="/images/tonylee.png" /></NavLink></h1>
                <div className="header-menu">
                    <a href="https://github.com/hytonylee"><img className="header-icon" src="/images/GitHub_White.png" /></a>
                    <a href="https://www.linkedin.com/in/hytonylee"><img className="header-icon" src="/images/LinkedIn_White.png" /></a>
                    <a href="mailto: hy.tony.lee@gmail.com"><img className="header-icon" src="/images/Email_White.png" /></a>
                </div>
            </div>
        </div>
    </header>
)

export default PublicHeader;