import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthanticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthanticated ? (
                <Redirect to='/' />
            ) : (
                    <div>
                        <Component {...props} />
                    </div>
                )
        )}
        />
    )

const mapStateToProps = (state) => ({
    isAuthanticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)