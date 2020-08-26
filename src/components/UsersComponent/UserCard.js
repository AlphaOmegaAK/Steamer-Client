import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserModel from '../../models/UserModel';

import './usersStyle.css'

function UserCard(props) {
  const { user, list } = props


  return (
    <div className="container" >
      <section className="user-card" >
        <li key="_id">
          <Link to={`/user/${user._id}`}>
            <h3>{user.username}</h3>
          </Link>
          <h5>{user.firstName}</h5>
          <h5>{user.email}</h5>
          <h6>{user.posts}</h6>
          <em>Member since: {user.createdAt}</em>
        </li>
      </section>
    </div>
  )
};

export default withRouter(UserCard);