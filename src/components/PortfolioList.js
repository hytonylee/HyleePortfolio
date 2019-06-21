import React from 'react';
import { connect } from 'react-redux';
import PortfolioListItem from './PortfolioListItem'
import selectPosts from '../selectors/post';

const PortfolioList = (props) => (
    < div >
        <h1>Portfolio List</h1>
        {
            props.posts.map((post) => {
                return < PortfolioListItem key={post.id} {...post} />
            })
        }
    </div >
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
        posts: selectPosts(state.posts, state.filters)
    }
}

export default connect(mapStateToProps)(PortfolioList)