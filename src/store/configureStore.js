import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk';


export default () => {
    const store = createStore(
        combineReducers({
            posts: postsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
