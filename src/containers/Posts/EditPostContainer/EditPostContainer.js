import React from 'react';
import PostModel from '../../../models/PostModel';

class EditPostContainer extends React.Component {
  state = {
    title: '',
    topic: '',
    body: '',
  }

  componentDidMount() {
    PostModel.getPostById(this.props.match.params.id)
      .then((result) => this.setState(result))
      .catch((err) => console.log(err))
  }

  handleChange = (event) => {
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    PostModel.updatePost(this.state, this.props.match.params.id)
      .then((result) => {
        console.log(result);
      });
    this.props.history.push(`/posts/${this.props.match.params.id}`);

  }

  render() {
    const { title, topic, body } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />

          <label htmlFor="topic">Topic</label>
          <input type="text" name="topic" id="topic" value={topic} onChange={this.handleChange} />

          <label htmlFor="body">Body</label>
          <input type="text" name="body" id="body" value={body} onChange={this.handleChange} />
          <button type="submit" >Done Editing</button>
        </form>
      </div>
    )
  }
}

export default EditPostContainer;