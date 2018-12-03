import React from 'react';
import PostPreview from './PostPreview';
import './BlogListPage.css'
import PostService from '../../services/PostService';

class BlogListPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          
                itens : PostService.buscarTodos(),
        
        }
    }

    render(){
        const posts = this.state.itens.map(post => {
            return (<PostPreview post={post} key={post.id} />)
        });

        return (
            <div className="post-list">
            {posts}
            </div>
        )
    }
}

export default BlogListPage;