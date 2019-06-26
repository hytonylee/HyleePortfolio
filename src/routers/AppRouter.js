import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

import MainPage from '../components/MainPage';
import Dashboard from '../components/Dashboard';
import Portfolio from '../components/Portfolio';
import CreatePost from '../components/CreatePost';
import EditPost from '../components/EditPost';
import Contact from '../components/Contact';
import LoginPage from '../components/LoginPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/Dashboard' exact component={Dashboard} />
                <Route path='/Portfolio' exact component={Portfolio} />
                <Route path='/CreatePost' exact component={CreatePost} />
                <Route path='/EditPost/:id' exact component={EditPost} />
                <Route path='/Contact' exact component={Contact} />
                <Route path='/LoginPage' exact component={LoginPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
