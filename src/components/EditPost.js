import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { editPost, removePost } from '../actions/posts';


const EditPost = (props) => {
    return (
        <div>
            <PostForm
                post={props.post}
                onSubmit={(post) => {
                    console.log('updated', post);
                    props.dispatch(editPost(props.post.id, post));
                    props.history.push('/dashboard')
                }}
            />
            <button onClick={() => {
                props.dispatch(removePost({ id: props.post.id }))
                props.history.push('/dashboard')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find((post) => {
            console.log('post.id is:', post.id)
            return (post.id === props.match.params.id)
        })
    }
}

export default connect(mapStateToProps)(EditPost);