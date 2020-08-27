import React from 'react';
import PostList from '../../../components/PostsComponent/PostsList'
import PostModel from '../../../models/PostModel';
import { Link } from 'react-router-dom';


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
      <>
        <PostList posts={this.state.posts} />

        <Link to="/posts/new">
          <button type="button">Create a Post</button>
        </Link>
      </>
    )
  };
}

export default PostListContainer;