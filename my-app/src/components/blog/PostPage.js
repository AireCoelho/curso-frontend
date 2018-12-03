import React from 'react';
import PostService from '../../services/PostService';
import './Post.css';


class PostPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: null,
        }
    }

    componentDidMount(){
        const postId = this.props.match.params.postId;
        const post = PostService.buscarPorId(postId);
        this.setState({post});
    }   

    render(){
        let page = null;
        if(this.state.post){
            const post = this.state.post;
            page = (
                <div className="post">
                <h3 className="post__title">{post.title}</h3>
                <p>Autor:<span className="post__author">{post.author}</span></p>
                <p>Data:<span className="post__date">{post.date}</span></p>
                <p className="post__intro">{post.intro}</p>
                <p className="post__content">{post.content}</p>
                </div>
            )
        }
        else{
            page = (
                <div><h1>Post não encontrado</h1></div>
            )
        }
        return(
            <div>
               {page} 
            </div>
            
        )
    }
}


export default PostPage;