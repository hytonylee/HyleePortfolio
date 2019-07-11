import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//Redux
import configureStore from './store/configureStore';
import { startSetPosts, startSetPostsWithoutAuth } from './actions/posts';;
import { login, logout } from './actions/auth';;
import { Provider } from 'react-redux';

//Routers
import AppRouter, { history } from './routers/AppRouter';

//Firebase
import { firebase } from './firebase/firebase';


const store = configureStore();
// const state = store.getState();
// const visiblePosts = getVisiblePosts(state.posts, state.filters)
// console.log(visiblePosts);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetPosts()).then(() => {
            renderApp();
            if (history.location.pathname === '/LoginPage') {
                history.push('/Dashboard')
            }
        })
    }
    else {
        store.dispatch(logout())
        store.dispatch(startSetPostsWithoutAuth()).then(() => {
            renderApp()
            console.log('Logout Success!!')
        })
    }
})



