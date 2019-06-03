import React from 'react';


const PostPage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the post with id of {props.match.params.id}.
        </div>
    )
}

export default PostPage;