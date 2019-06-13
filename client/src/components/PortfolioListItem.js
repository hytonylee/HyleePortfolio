import React from 'react';
import { connect } from 'react-redux';
import { removePost } from '../actions/posts';

const PortfolioListItem = ({ dispatch, id, desc, postType, link, note, createdAt }) => (
    <div>
        <hr />
        <h3>{desc}</h3>
        <button onClick={() => {
            dispatch(removePost({ id }))
        }}>Remove</button>

        <li>{postType}</li>
        <li>{note}</li>
        <li>{link}</li>
        <li>{createdAt}</li>

    </div>
)

export default connect()(PortfolioListItem);

