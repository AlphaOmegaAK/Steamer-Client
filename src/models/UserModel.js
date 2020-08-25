const url = 'http://localhost:4000/api/v1/users'


class UserModel {
  static getAllUsers = () => {
    return fetch(url)
      .then((res) => res.json())
  }
}

export default UserModel;