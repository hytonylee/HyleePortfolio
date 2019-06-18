import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioListItem = ({ id, desc, postType, link, note, createdAt }) => (
    <div>
        <hr />
        <h3>{desc}</h3>
        <button>
            <Link to={`/EditPost/${id}`}>Edit</Link>
        </button>
        <li>{postType}</li>
        <li>{note}</li>
        <li>{link}</li>
        <li>{createdAt}</li>

    </div >
)

export default PortfolioListItem;

