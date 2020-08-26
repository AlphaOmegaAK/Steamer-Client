import React from 'react';
import PostModel from '../../../models/PostModel';
import PostCard from '../../../components/PostsComponent/PostCard'



class PostContainer extends React.Component {
  state = {
    post: {}, //? rather than array use an object
  };


  componentDidMount() {
    PostModel.getPostById(this.props.match.params.id)
      .then((result) => {
        console.log('result of getPostById =', result);
        this.setState({ post: result })
      })
      .catch((err) => console.log(err))
  };


  render() {
    console.log('Post Container props:', this.props)
    return <PostCard post={this.state.post} />

  };
};

//! So we can get One Post
export default PostContainer;