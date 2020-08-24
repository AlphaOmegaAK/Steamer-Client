//API Calls for Posts

const url = 'http://localhost:4000/api/v1/posts'

class PostModel {
  static getAllPosts = () => {
    return fetch(url)
      .then((res) => res.json())
  }
  static getPostById = () => {

  }
}

export default PostModel;