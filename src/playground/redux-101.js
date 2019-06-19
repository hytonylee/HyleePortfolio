import { createStore } from 'redux';

// Action generators - function that return action obj

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})


// Reducers
// 1. are pure functions. Their outputs are only determined by their inputs. They do not change   anything outside of function scope, nor require anything outside of function scope.
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }
        case 'DECREMENT':
            return { count: state.count - action.decrementBy }
        case 'SET':
            return { count: action.count }
        case 'RESET':
            return { count: 0 }
        default:
            return state
    };
}

const store = createStore(countReducer);

// listen to redux change
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Actions - an obj that gets sent to the store

// Increment count
store.dispatch(incrementCount())
store.dispatch(incrementCount({ incrementBy: 5 }))


// Decrement count
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))


// Reset count to zero
store.dispatch(resetCount());


// Set count to a number
store.dispatch(setCount({ count: 23 }));
