import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './usersStyle.css'

function UserCard(props) {
  const { user, list } = props


  return (
    <>

      <section className="user-card" >
        <li key="_id">
          <Link user={user} to={`/users/${user._id}`}>
            <h3>{user.username}</h3>
          </Link>
          <h5>{user.firstName}</h5>
          <h5>{user.email}</h5>
          <h6>{user.posts}</h6>
          <em>Member since: {user.createdAt}</em>
        </li>
      </section>

    </>
  )
};

export default withRouter(UserCard);