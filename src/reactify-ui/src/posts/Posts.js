import React, { Component } from 'react';
import 'whatwg-fetch'
import cookie from 'react-cookies'

import PostInline from './PostInline'

class Posts extends Component {
    state = {
        posts: [],
        postsListClass: "card",
    }
    loadPosts(){
        const endpoint = '/api/posts/'
        let thisComp = this
        let lookupOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        }

        fetch(endpoint, lookupOptions)
        .then(function(response){
            return response.json()
        }).then(function(responseData){
            console.log(responseData)
            this !== thisComp
            thisComp.setState({
                posts: responseData
            })
        }).catch(function(error){
            console.log("error", error)
        })
    }

    CreatePost(){
        const endpoint = '/api/posts/'
        const csrfToken = cookie.load('csrftoken')
        let thisComp = this
        let data = {
            "slug": "",
            "title": "",
            "content": "",
            "draft": false,
            "publish": null
        }
        if (csrfToken !== undefined){
            let lookupOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                },
                body: JSON.stringify(data),
                credentials: 'include'
            }
            fetch(endpoint, lookupOptions)
            .then(function(response){
                return response.json()
            }).then(function(responseData){
                console.log(responseData)
            }).catch(function(error){
                console.log("error", error)
            })
    }


    }

    componentDidMount(){
        this.setState({
            posts: [],
            postsListClass: "card",
        })
        this.loadPosts()
    }

    render() {
        const {posts} = this.state
        const postsListClass = this.state
        return (
        <div>
            <h1>Hello World</h1>
            {posts.length > 0 ? posts.map((postItem, index)=>{
            return (
                <PostInline post={postItem} elClass='card' />
            )
            }) : <p>No Posts Found</p>}
        </div>
        );
    }
}

export default Posts;

