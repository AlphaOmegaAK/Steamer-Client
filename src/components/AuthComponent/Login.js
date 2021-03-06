import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import logo from '../../images/logo.png'

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
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/auth/login`, this.state)
      .then((res) => {
        console.log(res);
        this.props.setCurrentUser(res.data.token);
        this.props.history.push('/users');
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        console.log(err.response.message);
      });
  }

  render() {
    return (
      <div className="container">

        <div className="auth-container">
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div><img className="logo-login" src={logo} alt="" /></div>
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

              <button className="third" type="submit">Login</button>

            </div>
          </form>
        </div>
      </div>

    )
  };
};



export default withRouter(Login);