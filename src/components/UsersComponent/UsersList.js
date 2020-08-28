import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';


function UserList(props) {
  const userList = props.users.map((userObj) => {
    return (
      <UserCard

        key={userObj._id} to={`/users/${userObj._id}`} user={userObj}
      />)
  })
  return (
    <div className="userCardWrapper">
      {userList}
    </div>

  )
}

export default UserList;