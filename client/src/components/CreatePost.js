import React from 'react';
import PostForm from './PostForm';

const CreatePost = (props) => {
    console.log(props);

    return (
        <div>
            <h1>Create Post</h1>
            <PostForm />
        </div>
    )
}

export default CreatePost;