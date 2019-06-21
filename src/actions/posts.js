import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_POST
export const addPost = (post) => ({
    type: 'ADD_POST',
    post
})

export const startAddPost = (postData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            postType = '',
            createdAt = 0,
            note = '',
            link = ''
        } = postData
        const post = { title, postType, createdAt, note, link }

        database.ref('posts').push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }))
        })
    }
}

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