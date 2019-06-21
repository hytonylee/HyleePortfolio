import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//Redux
import configureStore from './store/configureStore';
import { addPost } from './actions/posts';;
import getVisiblePosts from './selectors/post';
import { Provider } from 'react-redux';

//Routers
import AppRouter from './routers/AppRouter';

//Firebase
import './firebase/firebase';

const store = configureStore();
const state = store.getState();
const visiblePosts = getVisiblePosts(state.posts, state.filters)
console.log(visiblePosts);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));



