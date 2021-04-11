import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
      this.props.fetchPosts();
  }

    // create another life cycle method
    componentWillReceiveProps(nextProps) {
if(nextProps.newPost) {
    this.props.posts.unshift(nextProps.newPost);
}
    }


    // lifecycle method
    render() {
        // map through all the post items
        const postitems = this.props.posts.map(post => (
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts}) (Posts);
