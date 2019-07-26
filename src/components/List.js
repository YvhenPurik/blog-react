import React, { Component } from 'react';
import PostItem from './Item';


export default class PostsList extends Component {
    onItemClickHandler = (postId) => {
        this.props.onItemClick(postId);
    };

    render(){
        return (
            <ol className="posts-list">
                {this.props.posts.map((post) =>
                    <li key={post.id} className="posts-list__item">
                        <PostItem
                            title={post.title}
                            author={post.author}
                            click={this.onItemClickHandler.bind(this, post.id)}/>
                    </li>
                )}
            </ol>
        );
    }
}