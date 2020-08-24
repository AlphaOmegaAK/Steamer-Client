import React from 'react';
import PostList from '../../components/PostsComponent/PostsList'
import PostModel from '../../models/PostModel';

class PostListContainer extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {

    PostModel.getAllPosts()
      .then((result) => {
        console.log(result);
        this.setState({ posts: result })
      })
      .catch((err) => console.log(err))
  }
  render() {
    console.log('Render Ran State = ', this.state);


    return (
      <PostList posts={this.state.posts} />
    )


  };
}
export default PostListContainer;