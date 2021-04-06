import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
      this.props.fetchPosts();
  }
    


    // lifecycle method
   

    render() {
        // map through all the post items
        const postitems = this.state.posts.map(post => (
            // give the uniqe key whenever we loop through the data like this
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            
        ));
        return (
            <div>
                <h1>Posts</h1>
                { postitems }
            </div>
        )
    }
}

export default connect(null, {fetchPosts}) (Posts);
