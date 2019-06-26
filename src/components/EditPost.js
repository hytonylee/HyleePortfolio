import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class EditPost extends React.Component {
    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/dashboard');
    }

    onRemove = () => {
        this.props.startRemovePost({ id: this.props.post.id });
        this.props.history.push('/dashboard');
    }

    render() {
        return (<div>
            <PostForm
                post={this.props.post}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove</button>
        </div>)
    }
}

const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find((post) => {
            // console.log('post.id is:', post.id)
            return (post.id === props.match.params.id)
        })
    }
}

const mapDisptachToProps = (dispatch, props) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post)),
    startRemovePost: (data) => dispatch(startRemovePost(data))
})

export default connect(mapStateToProps, mapDisptachToProps)(EditPost);