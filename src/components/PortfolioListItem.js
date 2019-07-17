import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//Firebase
import { firebase } from '../firebase/firebase';


let UserAuthenticated;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        UserAuthenticated = true
    }
    else {
        UserAuthenticated = false
    }
})

const PortfolioListItem = ({ id, title, image, link, note, createdAt }) => (
    <div className="list-item">
        {
            image &&
            <img className="list-image" src={image} />
        }
        <div className="list-header">
            <h3 className="list-title">{title.toUpperCase()}</h3>
            {
                UserAuthenticated &&
                <Link to={`/EditPost/${id}`}>
                    <i className="material-icons list-link">edit</i>
                </Link>
            }
        </div>
        <div className="list-content">
            <p className="list-date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
            <p>{note}</p>
        </div>
        <a href={link} className='list-button'>
            View Work
        </a>
    </div>
)

export default PortfolioListItem;

