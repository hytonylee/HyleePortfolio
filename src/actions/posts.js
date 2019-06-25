import database from '../firebase/firebase';

// ADD_POST
export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = (postData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            postType = '',
            createdAt = 0,
            note = '',
            link = ''
        } = postData;
        const post = { title, postType, createdAt, note, link }

        return database.ref('posts').push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }))
        })
    }
};

// REMOVE_POST
export const removePost = ({ id } = {}) => ({
    type: 'REMOVE_POST',
    id
});

export const startRemovePost = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove()
            .then(() => {
                dispatch(removePost({ id }));
            })
    }
}

// EDIT_POST
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});

export const startEditPost = (id, updates) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).update(updates)
            .then(() => {
                dispatch(editPost(id, updates))
            })
    }
};

// SET_POSTS (Fetch Data)

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            const posts = [];

            snapshot.forEach((childSnapshot) => {
                posts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setPosts(posts));
        });
    };
};

