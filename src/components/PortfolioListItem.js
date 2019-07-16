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
    <div className="list-item prfx-color">
        {
            image &&
            <img className="img" src={image} />
        }

        {UserAuthenticated &&
            <div className="list-header">
                <h3 className="list-title">{title}</h3>
                {UserAuthenticated && <Link to={`/EditPost/${id}`}>
                    <i className="material-icons" style={{ color: 'white' }}>edit</i>
                </Link>}
            </div>
        }
        <div className="list-content">

            {/* <h6>{moment(createdAt).format('MMMM Do, YYYY')}</h6> */}
            <p>{note}</p>
        </div>
        {/* </div>
        } */}
    </div >
)

export default PortfolioListItem;

