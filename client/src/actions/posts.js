import uuid from 'uuid';

// ADD_POST
export const addPost = ({
    desc = '',
    note = '',
    postType = '',
    createdAt = 0,
    sortBy = 0,
    link = '' } = {}) => ({
        type: 'ADD_POST',
        post: {
            id: uuid(),
            desc,
            postType,
            note,
            link,
            createdAt,
            sortBy,
        }
    })

// REMOVE_POST
export const removePost = ({ id } = {}) => ({
    type: 'REMOVE_POST',
    id
})

// EDIT_POST
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
})