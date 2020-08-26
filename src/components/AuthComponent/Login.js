import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.props);
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/auth/login`, this.state)
      .then((response) => {
        console.log(response);
        // this.props.setCurrentUser(response.data.token);
        // this.props.history.push('/users');
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
        alert(error.response.message);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="auth-container">

          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <h2>Welcome Back !</h2> <hr />
              <label htmlFor="username">User Name : </label> <br />
              <input onChange={this.handleChange}
                type="username"
                id="username"
                name="username"
                value={this.state.username} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password : </label> <br />
              <input onChange={this.handleChange}
                type="password"
                id="password"
                name="password"
                value={this.state.password} />
              <br />

            </div>
            <div className="form-group">
              <button type="submit">Login</button>

            </div>
          </form>
        </div>
      </div>

    )
  };
};



export default withRouter(Login);