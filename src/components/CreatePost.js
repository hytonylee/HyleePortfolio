import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../actions/posts'

const CreatePost = (props) => {

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h3 className="page-header__title">Create Post</h3>
                </div>
            </div>
            <div className="content-container">
                <PostForm
                    onSubmit={(post) => {
                        props.dispatch(startAddPost(post))
                        props.history.push('/dashboard')
                    }}
                />
            </div>
        </div>
    )
}

export default connect()(CreatePost);