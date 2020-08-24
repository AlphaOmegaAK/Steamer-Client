import React from 'react';


class Register extends React.Component {
  state = {
    firstName: '',
    email: '',
    password: '',
  }

  render() {
    return (
      <form onSubmit="">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" />
        </div>
      </form>
    )
  };
};



export default Register