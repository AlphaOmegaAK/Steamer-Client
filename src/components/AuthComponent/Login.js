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
      [this.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/auth/login`, this.state)
      .then((res) => {
        console.log(res);
        this.props.setCurrentUser(res.data.token);
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        alert(err.response.message);
      })
  }

  render() {
    return (
      <div className="auth-container">
        <form onSubmit={this.handleSubmit} >

          <div className="form-group">
            <label htmlFor="username">User Name : </label>
            <input onChange={this.handleChange}
              type="text"
              id="username"
              name="username"
              value={this.state.email} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password : </label>
            <input onChange={this.handleChange}
              type="password"
              id="password"
              name="password"
              value={this.state.email} />
          </div>


        </form>
      </div>
    )
  };
};



export default withRouter(Login);