const url = 'http://localhost:4000/api/v1/users'


class UserModel {
  static getAllUsers = () => {
    return fetch(url)
      .then((res) => res.json())
  }
  static getUserById = (userId) => {
    return fetch(`${url}/${userId}`)
      .then((res) => res.json())
  }
  static updateUser = (user, id) => {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json());
  }
}

export default UserModel;