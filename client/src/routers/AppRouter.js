import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

import MainPage from '../components/MainPage';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';


const Header = () => (
    <header>
        <NavLink to='/' activeClassName="is-active"><h1>HYLee</h1></NavLink>
        <NavLink to='/portfolio' activeClassName="is-active">Portfolio</NavLink>
        <NavLink to='/blog' activeClassName="is-active">Blog</NavLink>
        <NavLink to='/contact' activeClassName="is-active">Contact</NavLink>
    </header>
)

const NotFound = () => (
    <div>
        404 Not Found. Go back to <Link to='/'>Hompage</Link>
    </div>
)

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/portfolio' exact component={Portfolio} />
                <Route path='/blog' exact component={Blog} />
                <Route path='/contact' exact component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
