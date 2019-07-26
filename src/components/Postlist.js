import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../sagas/index'
import {fetchPosts, updateAuthorFilter} from '../actions/posts';
import PostsList from './List';
import { NavLink } from "react-router-dom";

class Postlist extends React.Component {
  componentDidMount() {
       this.fetchPosts();
  }

  onItemClickHandler = (postId) => {
      this.props.changePageTo('/details', postId);
  };

  fetchPosts = () => {
      this.props.fetchPosts();
  };


  render() {
      let posts = <p>No posts</p>;
      // console.log(this.props.posts.reducer.photos.slice(0, 50))
      let postsList;
      // let photolist = this.props.posts.reducer.photos.slice(0, 50);
      if(this.props.posts.reducer.data.length > 0){
        postsList =  this.props.posts.reducer.data.map((el)=>{
          postsList = <PostsList
          onItemClick={this.onItemClickHandler}
          posts={this.props.posts.reducer.data}
          />
            return (
              <NavLink to="/details" className={'NavLink'} onClick={()=>console.log('click navlink', el)}>
                   <div className="postList" key={el.id}>
                  {/* <img src="https://source.unsplash.com/user/jackie/likes/100x100"/> */}
                       <p>{el.title}</p>
                </div>
              </NavLink>
                
            )
       
        
    })
}
   return (
          <div className="posts">
              <main className="main">
                {postsList}
              </main>
          </div>
      )
  };
}



const stateToProps = state => {
  return {
      posts: state,
     
  };
};

const dispatchToProps = dispatch => {
  return {
      fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(stateToProps, dispatchToProps)(Postlist);