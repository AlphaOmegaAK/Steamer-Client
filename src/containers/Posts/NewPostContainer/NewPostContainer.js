import React from 'react';

import PostModel from '../../../models/PostModel';
// import UserModel from '../../../models/UserModel';

class NewPostContainer extends React.Component {
  state = {
    title: '',
    topic: '',
    body: '',
    // user: [],
  }

  handleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value })
    // looking for name property on input tag
  }

  handleSubmit = (event) => {
    event.preventDefault();
    PostModel.createPost(this.state)
      .then((result) => {
        console.log(result);
      })
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div className="post-card">
        <h2>
          Send off a New Post
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
              <label htmlFor="body">Body</label>
              <input onInput={this.handleChange} type="text" name="body" id="body" />
            </div>
            <button type="submit">Post</button>
          </form>
        </h2>
      </div>

    )
  };
};

export default NewPostContainer;