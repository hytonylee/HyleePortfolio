import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import { createBrowserHistory } from 'history'
import MainPage from '../components/MainPage';
import Dashboard from '../components/Dashboard';
import Portfolio from '../components/Portfolio';
import CreatePost from '../components/CreatePost';
import EditPost from '../components/EditPost';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        {/* instead of using browser router (which uses brower history by default, we use regular router.) */}
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/Dashboard' exact component={Dashboard} />
                <Route path='/Portfolio' exact component={Portfolio} />
                <Route path='/CreatePost' exact component={CreatePost} />
                <Route path='/EditPost/:id' exact component={EditPost} />
                <Route path='/Contact' exact component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter
