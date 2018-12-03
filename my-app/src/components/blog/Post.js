import React from 'react';


import './Post.css';

const Post = (props)=>{
    const post = props.post || {};
    return(
    <div className="post">

    <h3 className="post__title">{post.title}</h3>
    <p>Autor:<span className="post__author">{post.author}</span></p>
    <p>Data:<span className="post__date">{post.date}</span></p>
    <p className="post__intro">{post.intro}</p>
    <p className="post__intro">{post.content}</p>
    </div>
)
}

export default Post;