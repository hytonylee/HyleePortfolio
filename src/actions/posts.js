import database from '../firebase/firebase';

// ADD_POST
export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = (postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            postType = '',
            image = '',
            createdAt = 0,
            note = '',
            link = ''
        } = postData;
        const post = { title, postType, image, createdAt, note, link }

        return (
            database.ref(`users/${uid}/posts`).push(post).then((ref) => {
                dispatch(addPost({
                    id: ref.key,
                    ...post
                }))
            }) &
            database.ref(`public/${uid}/posts`).push(post).then((ref) => {
                dispatch(addPost({
                    id: ref.key,
                    ...post
                }))
            })
        )
    }
};

// REMOVE_POST
export const removePost = ({ id } = {}) => ({
    type: 'REMOVE_POST',
    id
});

export const startRemovePost = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}posts/${id}`).remove()
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}posts/${id}`).update(updates)
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
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

export const startSetPostsWithoutAuth = () => {
    return (dispatch) => {
        return database.ref(`public/2hG6elt1HRPU5KQKNSEFZsfofwl2/posts`).once('value').then((snapshot) => {
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



// export const startSetPostsWithoutAuth = () => {
//     return (dispatch) => {
//         return database.ref('public').on('child_added', (snapshot) => {
//             const posts = [];
//             snapshot.forEach((childSnapshot) => {
//                 posts.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             })
//         })
//     }
// }
