import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }


    // lifecycle method
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        // fetch will return to promise
        .then(res => res.json())
        .then(data => this.setState({posts:data}));
    }

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

export default Posts;
