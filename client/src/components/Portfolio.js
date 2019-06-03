import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = (props) => {
    console.log(props)
    return (
        <div>
            This is the Porfolio Page.
            <ol>
                <li><Link to='/PostPage/22' activeClassName="is-active">Post #22</Link></li>
                <li><Link to='/PostPage/73' activeClassName="is-active">Post #73</Link></li>
            </ol>
        </div>
    )
}

export default Portfolio;
