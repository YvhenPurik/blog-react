import React from "react";

const PostItem = ({title, author, click}) => {
    return (
        <div className="posts-item">
            <h2 onClick={click} className="posts-item__title">{title}</h2>
            <p className="posts-item__author">Author: <span className="posts-item__author-name">{author}</span></p>
        </div>
    );
};

export default PostItem;