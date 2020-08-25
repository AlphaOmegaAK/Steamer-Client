import React from 'react';
import axios from 'axios';


class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post()
      .then((res) => {
        console.log(res);
        this.props.history.push('/login')
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        console.log(err.response.data.message);

      });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name : </label>
          <input type="text" onChange={this.handleChange} id="firstName" name="firstName" value={this.state.firstName} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name : </label>
          <input type="text" onChange={this.handleChange} id="lastName" name="lastName" value={this.state.lastName} />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name : </label>
          <input type="text" onChange={this.handleChange} id="username" name="username" value={this.state.username} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" onChange={this.handleChange} id="email" name="email" value={this.state.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input type="password" onChange={this.handleChange} id="password" name="password" value={this.state.password} />
          <label htmlFor="password">Password :</label>
          <input type="password" onChange={this.handleChange} id="password" name="password" value={this.state.password} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location :</label>
          <input type="text" onChange={this.handleChange} id="location" name="location" value={this.state.location} />
        </div>
        <button onSubmit="">Complete Register</button>
      </form>
    )
  };
};



export default Register