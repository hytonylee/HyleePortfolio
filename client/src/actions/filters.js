// EDIT_POST
const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
})

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_TYPE
export const sortByType = () => ({
    type: 'SORT_BY_TYPE',
})

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})