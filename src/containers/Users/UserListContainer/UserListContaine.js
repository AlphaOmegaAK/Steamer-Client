import React from 'react';
import UserList from '../../../components/UsersComponent/UsersList';
import UserModel from '../../../models/UserModel';

class UserListContainer extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    UserModel.getAllPosts()
      .then((result) => {
        console.log(result);
        this.setState({ users: result })
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log('Render Ran State = ', this.state);

    return (
      <UserList users={this.state.users} />
    )
  };
};

export default UserListContainer;