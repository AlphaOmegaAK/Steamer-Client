import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
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
    axios.post(`${process.env.REACT_APP_API}/auth/register`, this.state)
      // or axios({   (( Config Object ))
      // method: 'POST',
      //   url: `${process.env.REACT_APP_API}/auth/register`,
      //   })
      .then((res) => {
        console.log(res);
        this.props.history.push('/login')
      })
      .catch((err) => {
        alert('All fields are needed, please try again')
        console.log(err)
        console.log(err.response.status);
        console.log(err.response.data);
        console.log(err.response.data.message);

      });
  }

  render() {
    return (
      <div className="auth-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name : </label><br />
            <input
              type="text"
              onChange={this.handleChange}
              id="firstName" name="firstName"
              value={this.state.firstName}

            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name : </label><br />
            <input
              type="text"
              onChange={this.handleChange}
              id="lastName" name="lastName"
              value={this.state.lastName}

            />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name : </label><br />
            <input
              type="text"
              onChange={this.handleChange}
              id="username" name="username"
              value={this.state.username}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label><br />
            <input
              type="email"
              onChange={this.handleChange}
              id="email" name="email"
              value={this.state.email}

            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password :</label><br />
            <input
              type="password"
              onChange={this.handleChange}
              id="password" name="password"
              value={this.state.password}

            />
            {/* <label htmlFor="password">Password :</label><br />
            <input type="password"
              onChange={this.handleChange}
              id="password" name="password"
              value={this.state.password}
            /> */}
          </div>
          <div className="form-group">
            <label htmlFor="location">Location :</label><br />
            <input
              type="text"
              onChange={this.handleChange}
              id="location" name="location"
              value={this.state.location}

            />
            <br />
            <button
              onSubmit={this.handleSubmit}>Complete Register</button>
          </div>
        </form>
      </div>
    )
  };
};



export default withRouter(Register)