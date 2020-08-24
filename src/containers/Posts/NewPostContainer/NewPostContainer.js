import React from 'react';


class NewPostContainer extends React.Component {


  render() {
    return (
      <div>
        <h2>
          Send off a New Post
           <form className="form-container" >
            <div>
              <label htmlFor="">Title</label>
              <input type="text" name="title" />
            </div>
            <div>
              <label htmlFor="">Topic</label>
              <input type="text" name="topic" />
            </div>
            <div>
              <label htmlFor="">Body</label>
              <input type="text" name="body" />
            </div>

          </form>
        </h2>
      </div>
    )
  }
}

export default NewPostContainer;