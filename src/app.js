import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//Redux
import configureStore from './store/configureStore';
import { startSetPosts } from './actions/posts';;
import { setTextFilter } from './actions/filters';;
import getVisiblePosts from './selectors/post';
import { Provider } from 'react-redux';

//Routers
import AppRouter from './routers/AppRouter';

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

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetPosts()).then(
    ReactDOM.render(jsx, document.getElementById('app'))
)

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in');
    } else {
        console.log('log out');
    }
})



