import React from 'react';
import { withRouter } from 'react-router-dom';

import PostModel from '../../../models/PostModel';
// import UserModel from '../../../models/UserModel';

import './NewCard.css'
class NewPostContainer extends React.Component {
  state = {
    title: '',
    topic: '',
    body: '',
    // user: [],
  }

  handleChange = (event) => {
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    PostModel.createPost(this.state)
      .then((result) => {
        console.log(result);
      })
    console.log([event.target.name])

    this.props.history.push('/posts')

  }

  render() {
    return (
      <div className="new-card">
        <h2>
          Send off a New Post</h2>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input onInput={this.handleChange} type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="topic">Topic</label>
            <input onInput={this.handleChange} type="text" name="topic" id="topic" />
          </div>
          <div>
            <label htmlFor="body">Body</label> <br />
            <textarea onInput={this.handleChange} name="body" id="body" cols="64" rows="10"></textarea>
          </div>
          <button className="second" type="submit">Post</button>
        </form>

      </div>

    )
  };
};

export default withRouter(NewPostContainer);