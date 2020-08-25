//API Calls for Posts

const url = 'http://localhost:4000/api/v1/posts'

class PostModel {
  static getAllPosts = () => {
    return fetch(url)
      .then((res) => res.json())
  }
  static getPostById = (postId) => {
    return fetch(`${url}/${postId}`)
      .then((res) => res.json())
  }
  static createPost = (postObj) => {
    return fetch(url, {
      // configuration object anytime you want to do anything other than a GET request
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // Date itself we want to send
      // if axios its datta
      body: JSON.stringify
      // stringify converst objects to strings
    })
      .then((res) => res.json())
  }
}

export default PostModel;

// For Delete you can leave off body/data-axios
// update needs body/data-axios