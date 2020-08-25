import React from 'react';
import PostModel from '../../../models/PostModel';
import UserModel from '../../../models/UserModel';

class NewPostContainer extends React.Component {
  state = {
    title: '',
    topic: '',
    body: '',
    user: [],
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
    // looking for name property on input tag
  }

  handleSubmit = (event) => {
    event.prevenDefault();
    PostModel.createPost(this.state)
      .then((result) => {
        console.log(result);
      })
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div>
        <h2>
          Send off a New Post
           <form className="form-container" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="">Title</label>
              <input onInput={this.handleChange} type="text" name="title" />
            </div>
            <div>
              <label htmlFor="">Topic</label>
              <input onInput={this.handleChange} type="text" name="topic" />
            </div>
            <div>
              <label htmlFor="">Body</label>
              <input onInput={this.handleChange} type="text" name="body" />
            </div>
            <button type="submit">Post</button>
          </form>
        </h2>
      </div>
    )
  };
};

export default NewPostContainer;