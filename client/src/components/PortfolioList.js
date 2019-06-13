import React from 'react';
import { connect } from 'react-redux';

const PortfolioList = (props) => (
    <div>
        <h1>Portfolio List</h1>
        <p>{props.posts.length}</p>
        <p>{props.filters.text}</p>
    </div>
)



// const ConnectedPostList = connect((state) => {
//     return {
//         posts: state.posts
//     }
// })(PortfolioList);

// export default ConnectedPostList;

// ---- Refactor to the following: --------

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(PortfolioList)