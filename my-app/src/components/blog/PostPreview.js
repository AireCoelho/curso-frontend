import React from 'react';
import { Link } from 'react-router-dom';

import './PostPreview.css';

const PostPreview = (props)=>{
    const post = props.post || {};
    return(
    <div className="post-preview">

    <h3 className="post-preview__title">{post.title}</h3>
    <p>Autor:<span className="post-preview__author">{post.author}</span></p>
    <p>Data:<span className="post-preview__date">{post.date}</span></p>
    <p className="post-preview__intro">{post.intro}</p>
    <div className="post-preview__action-bar">
    <Link to={`/blog/post/${post.id}`} className ="post-preview__btn-read-more"> Ler mais </Link>
    </div>
    </div>
)
}

export default PostPreview;