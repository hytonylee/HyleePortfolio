import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthanticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthanticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to='/' />
                )
        )}
        />
    )

const mapStateToProps = (state) => ({
    isAuthanticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)