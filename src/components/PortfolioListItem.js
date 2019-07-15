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
        <h3>{title}</h3>
        {UserAuthenticated && <button><Link to={`/EditPost/${id}`}>Edit</Link> </button>}
        {image &&
            <div className="img" style={{ backgroundImage: `url(${image})` }}>
            </div>
        }
        <li>{link}</li>
        <li>{moment(createdAt).format('MMMM Do, YYYY')}</li>
        <p>{note}</p>

    </div >
)

export default PortfolioListItem;

