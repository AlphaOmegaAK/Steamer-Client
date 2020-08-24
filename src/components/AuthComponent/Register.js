import React from 'react';


class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
  }

  render() {
    return (
      <form onSubmit=''>
        <div className="form-group">
          <label htmlFor="firstName">First Name : </label>
          <input type="text" onChange="" id="firstName" name="firstName" value={this.state.firstName} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name : </label>
          <input type="text" onChange="" id="lastName" name="lastName" value={this.state.lastName} />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name : </label>
          <input type="text" onChange="" id="username" name="username" value={this.state.username} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" onChange="" id="email" name="email" value={this.state.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input type="password" onChange="" id="password" name="password" value={this.state.password} />
          <label htmlFor="password">Password :</label>
          <input type="password" onChange="" id="password" name="password" value={this.state.password} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location :</label>
          <input type="text" onChange="" id="location" name="location" value="location" />
        </div>
        <button onSubmit="">Complete Register</button>
      </form>
    )
  };
};



export default Register