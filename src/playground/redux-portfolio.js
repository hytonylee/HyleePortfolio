import { createStore, combineReducers } from 'redux';
// combineReducers can create and combine multiple functions
import uuid from 'uuid';

// ADD_POST
const addPost = ({
    title = '',
    note = '',
    postType = '',
    createdAt = 0,
    sortBy = 0,
    link = '' } = {}) => ({
        type: 'ADD_POST',
        post: {
            id: uuid(),
            title,
            postType,
            note,
            link,
            createdAt,
            sortBy,
        }
    })

// REMOVE_POST
const removePost = ({ id } = {}) => ({
    type: 'REMOVE_POST',
    id
})

// EDIT_POST
const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_TYPE
const sortByType = () => ({
    type: 'SORT_BY_TYPE',
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})



// Posts Reducer
const postsReducerDefaultState = [];
const postsReducer = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ]
        case 'REMOVE_POST':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_POST':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }
                } else {
                    return post;
                }
            })
        default:
            return state;
    }
}

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_TYPE':
            return {
                ...state,
                sortBy: 'type'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}




// Get visible post
const getVisiblePosts = (posts, { text, sortBy, startDate, endDate }) => {
    return posts.filter((post) => {
        const startDateMatch = typeof startDate !== 'number' || post.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || post.createdAt <= endDate;
        const textMatch = post.note.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'type') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
};

// Store creation
const store = createStore(
    combineReducers({
        posts: postsReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visiblePosts = getVisiblePosts(state.posts, state.filters)
    console.log(visiblePosts);
});

// =========================== DISPATCH ======================================

// --------------------------- AddPost  --------------------------------------
const postOne = store.dispatch(addPost({
    title: 'Ramen Kiosk',
    postType: 'portfolio',
    note: 'POS Web application with React frontend and Rail backend.',
    link: 'https://github.com/hytonylee/Ramen-Kiosk',
    createdAt: 1000
}));

const postTwo = store.dispatch(addPost({
    title: 'Swift Converter',
    postType: 'portfolio',
    note: 'Swift format upload and convert to readable csv in MERN stack.',
    link: 'https://github.com/hytonylee/Swift-Converter',
    createdAt: -1000
}));

// // --------------------------- removePost  --------------------------------------
// store.dispatch(removePost({ id: postOne.post.id }))
// // --------------------------- EditPost    --------------------------------------
// store.dispatch(editPost(postTwo.post.id, { postType: 'blog' }))
// // --------------------------- setTextFilter--------------------------------------
// store.dispatch(setTextFilter('react'))
// store.dispatch(setTextFilter(''))
// // --------------------------- setTextFilter--------------------------------------
// store.dispatch(sortByDate());
store.dispatch(sortByType());
//// -----------------------setStartDate  & setEndDate ----------------------------------
// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))


const demoState = {
    posts: [{
        id: uuid,
        title: 'Ramen Kiosk',
        postType: 'portfolio',
        note: 'React Frontend and Ruby on Rail Backend',
        link: 'https://github.com/hytonylee/Ramen-Kiosk',
        createdAt: 0
    }],

    filters: {
        text: 'react',
        sortBy: 'date', // date
        startDate: undefined,
        endDate: undefined,
    }
}

