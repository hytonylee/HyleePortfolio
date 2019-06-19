// higher order component (HOC) is a component that renders another component.
// Reuse code
// Render hijacking
// Prop Manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}. </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

// requireAuthentication

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <p>You have logged in</p>
            ) : (
                    <p>Please login in.</p>
                )}
            <WrappedComponent {...props} />
        </div >
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuth(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="These are the details" />, document.getElementById('app'));