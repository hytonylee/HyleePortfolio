import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}


// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import postsReducer from '../reducers/posts';
// import filtersReducer from '../reducers/filters';
// import authReducer from '../reducers/auth';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default () => {
//     const store = createStore(
//         combineReducers({
//             posts: postsReducer,
//             filters: filtersReducer,
//             auth: authReducer
//         }),
//         composeEnhancers(applyMiddleware(thunk))
//     );

//     return store;
// };
