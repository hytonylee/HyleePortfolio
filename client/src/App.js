import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Redux
import configureStore from './store/configureStore';
import { addPost } from './actions/posts';
import { setTextFilter } from './actions/filters';
import getVisiblePosts from './selectors/post';
import { Provider } from 'react-redux';

//Routers
import AppRouter from './routers/AppRouter';


const store = configureStore();

const PostOne = store.dispatch(addPost({
    desc: 'Ramen Kiosk',
    postType: 'portfolio',
    note: 'POS Web application with react frontend and Rail backend.',
    link: 'https://github.com/hytonylee/Ramen-Kiosk',
    createdAt: 1000,
}))

const postTwo = store.dispatch(addPost({
    desc: 'Swift Converter',
    postType: 'portfolio',
    note: 'Swift format upload and convert to readable csv in MERN (react) stack.',
    link: 'https://github.com/hytonylee/Swift-Converter',
    createdAt: -1000,
}));

const postThree = store.dispatch(addPost({
    desc: 'Journal 1',
    postType: 'blog',
    note: 'Writing on how to build React with Apollo.',
    link: 'https://github.com/hytonylee/Swift-Converter',
    createdAt: 100,
}));

// store.dispatch(setTextFilter('react'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('swift'))
// }, 3000)

const state = store.getState();
const visiblePosts = getVisiblePosts(state.posts, state.filters)
console.log(visiblePosts);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));



