import React from 'react';
import UserModel from '../../../models/UserModel';
import UserCard from '../../../components/UsersComponent/UserCard';



class UserContainer extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    UserModel.getUserById(this.props.match.params.id)
      .then((result) => {
        this.setState({ user: result })
      })
      .catch((err) => console.log(err))
  };


  render() {
    console.log('User Container props:', this.props);
    return <UserCard user={this.state.users} />
  }

}

export default UserContainer;