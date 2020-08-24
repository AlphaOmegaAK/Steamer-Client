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
      <form onSubmit="">
        <div className="form-group">
          <label htmlFor="firstName">First Name : </label>
          <input type="text" onChange="" id="" name="" value="" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name : </label>
          <input type="text" onChange="" id="" name="" value="" />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name : </label>
          <input type="text" onChange="" id="" name="" value="" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" onChange="" id="" name="" value="" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input type="password" onChange="" id="" name="" value="" />
          <label htmlFor="password">Password :</label>
          <input type="password" onChange="" id="" name="" value="" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location :</label>
          <input type="text" onChange="" id="" name="" value="" />
        </div>
        <button onSubmit="">Complete Register</button>
      </form>
    )
  };
};



export default Register