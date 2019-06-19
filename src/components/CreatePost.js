import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { addPost } from '../actions/posts'

const CreatePost = (props) => {
    console.log(props);

    return (
        <div>
            <h1>Create Post</h1>
            <PostForm
                onSubmit={(post) => {
                    props.dispatch(addPost(post))
                    props.history.push('/dashboard')
                }}
            />
        </div>
    )
}

export default connect()(CreatePost);