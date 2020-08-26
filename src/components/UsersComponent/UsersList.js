import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';


function UserList(props) {
  const userList = props.users.map((userObj) => {
    return <UserCard
      key={userObj._id} user={userObj}
    />
  })
  return (
    <div className="container">
      {userList}
    </div>

  )
}

export default UserList;