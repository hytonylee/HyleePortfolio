import React from 'react';

const PortfolioListItem = ({ desc, postType, link, createdAt }) => (
    <div>
        <hr />
        <h3>{desc}</h3>
        <p>{postType}</p>
        <p>{link}</p>
        <p>{createdAt}</p>
    </div>
)

export default PortfolioListItem;

