import React, { Component } from 'react'

class Postform extends Component {
constructor(props) {
    super(props);
    this.state = {
        title: '',
        body: ''
    }; 

    // bind the onChange and onSubmit
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

   onChange(e) {
       this.setState({[e.target.name]: e.target.value});
   } 


   onSubmit (e) {
    //    we have to bind
    e.preventDefault();

    // create the post

    const post = {
        title: this.state.title,
        body: this.state.body
    }
    // make a fetch request
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))

   } 
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body </label><br/>
                        <textarea   name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform;