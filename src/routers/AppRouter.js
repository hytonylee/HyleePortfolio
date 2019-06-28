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
import NotFound from '../components/NotFound';
// import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        {/* instead of using browser router (which uses brower history by default, we use regular router.) */}
        <div>
            {/* <Header /> */}
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/Portfolio' exact component={Portfolio} />
                <PrivateRoute path='/Dashboard' exact component={Dashboard} />
                <PrivateRoute path='/CreatePost' exact component={CreatePost} />
                <PrivateRoute path='/EditPost/:id' exact component={EditPost} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter
