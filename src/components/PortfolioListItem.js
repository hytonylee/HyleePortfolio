import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
        <li>{moment(createdAt).format('MMMM Do, YYYY')}</li>

    </div >
)

export default PortfolioListItem;

