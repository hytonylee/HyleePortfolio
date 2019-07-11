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
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h3 className="page-header__title">Edit Post: {this.props.post.title}</h3>
                    </div>
                </div>
                <div className="content-container">
                    <PostForm
                        post={this.props.post}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
                </div>
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