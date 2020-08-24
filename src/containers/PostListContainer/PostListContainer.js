import React from 'react';
import PostModel from '../../models/PostModel';
class PostListContainer extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    // Make a Async Await Call
    PostModel.getAllPosts()
      .then((result) => {
        console.log(result);
        this.setState({ posts: result })
      })
      .catch((err) => console.log(err))
  }
  render() {
    // const postsList = this.state.posts.map()
    console.log('Render Ran State = ', this.state);
    return (
      <div>
        <h1>Post Cdfwsontainer</h1>
      </div>
    )


  };
}
export default PostListContainer;