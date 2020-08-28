import React from 'react';
import PostModel from '../../../models/PostModel';
import { Link } from 'react-router-dom'
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
    console.log(event.target.value);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit = (event) => {
    event.preventDefault();



    console.log('Current State of Post edit is ', this.state);
    PostModel.updatePost(this.state, this.props.match.params.id)
      .then((result) => {
        console.log(result);

      });
    // this.setState(prevState => ({
    //   item: { ...prevState.item, [e.target.name]: e.target.value }
    // }))
    // }


    this.props.history.push(`/posts/${this.props.match.params.id}`);
  }


  render() {

    const { title, topic, body } = this.state;

    return (

      <div className="post-card">

        <form classname="form-container" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Title</label>
          <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />

          <label htmlFor="topic">Topic</label>
          <input type="text" name="topic" id="topic" value={topic} onChange={this.handleChange} />

          <label htmlFor="body">Body</label>
          <input type="text" name="body" id="body" value={body} onChange={this.handleChange} />
          {/* <button type="submit" onClick={() => this.setState()} >Done Editing</button> */}


          <button className="btn third" type="submit" onClick={() => this.setState()} >Done Editing</button>


        </form>


      </div>
    )
  }
}

export default EditPostContainer;