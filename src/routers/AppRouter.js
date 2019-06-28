import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import { createBrowserHistory } from 'history'
import Dashboard from '../components/Dashboard';
import Portfolio from '../components/Portfolio';
import CreatePost from '../components/CreatePost';
import LoginPage from '../components/LoginPage';
import EditPost from '../components/EditPost';
import NotFound from '../components/NotFound';
// import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        {/* instead of using browser router (which uses brower history by default, we use regular router.) */}
        <div>
            {/* <Header /> */}
            <Switch>
                <Route path='/Portfolio' exact component={Portfolio} /> */}
                <PublicRoute path="/" exact component={LoginPage} />
                {/* <PrivateRoute path='/' exact component={MainPage} /> */}
                <PrivateRoute path='/Dashboard' exact component={Dashboard} />
                <PrivateRoute path='/CreatePost' exact component={CreatePost} />
                <PrivateRoute path='/EditPost/:id' exact component={EditPost} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter
