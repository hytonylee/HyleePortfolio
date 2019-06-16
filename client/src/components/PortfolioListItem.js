import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePost } from '../actions/posts';

const PortfolioListItem = ({ dispatch, id, desc, postType, link, note, createdAt }) => (
    <div>
        <hr />
        <h3>{desc}</h3>
        <button onClick={() => {
            dispatch(removePost({ id }))
        }}>Remove</button>
        <button>
            <Link to={`/EditPost/${id}`}>Edit</Link>
        </button>
        <li>{postType}</li>
        <li>{note}</li>
        <li>{link}</li>
        <li>{createdAt}</li>

    </div >
)

export default connect()(PortfolioListItem);

