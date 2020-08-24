import React from 'react';
import PostModel from '../../../models/PostModel';
import PostCard from '../../../components/PostsComponent/PostCard'



class PostContainer extends React.Component {
  state = {
    post: {}, //? rather than array use an object
  };
  componentDidMount() {
    PostModel.getGameById()
      .then((result) => {
        this.setState({ post: result })
      })
      .catch((err) => console.log(err))

  };

  render() {
    return <PostCard post={this.state.post} />
    console.log(this.state.post);
  };
};

//! So we can get One Post
export default PostContainer;