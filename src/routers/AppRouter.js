import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import { createBrowserHistory } from 'history';
import Portfolio from '../components/Portfolio';
import Dashboard from '../components/Dashboard';
import CreatePost from '../components/CreatePost';
import LoginPage from '../components/LoginPage';
import EditPost from '../components/EditPost';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        {/* instead of using browser router (which uses brower history by default, we use regular router.) */}
        <div>
            <Switch>
                {/* <PublicRoute path='/' exact component={LoginPage} />
                <Route exact path="Portfolio" component={Portfolio} />
                <PrivateRoute exact path="/Dashboard" component={Dashboard} />
                <PrivateRoute exact path='/CreatePost' component={CreatePost} />
                <PrivateRoute exact path='/EditPost/:id' component={EditPost} /> */}

                <Route exact path="/" component={Portfolio} />
                <Route path='/LoginPage' exact component={LoginPage} />
                <PrivateRoute exact path="/Dashboard" component={Dashboard} />
                <PrivateRoute exact path='/CreatePost' component={CreatePost} />
                <PrivateRoute exact path='/EditPost/:id' component={EditPost} />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    </Router>
)

export default AppRouter
