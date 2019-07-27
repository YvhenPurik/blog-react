import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../sagas/index'
import {fetchPosts, updateAuthorFilter} from '../actions/posts';
import Header from './header';


class PostDetails extends React.Component {
  componentDidMount() {
      
          // this.fetchPosts();
  }


  // fetchPosts = () => {
  //     this.props.fetchPosts();
  // };


  render() {
     console.log('info post click-->', this.props.posts.reducer.currentPost) 
   return (
       <div className="App">
           <Header/>
          <div className="posts-details">
                <div className="post-details-wrap"></div>
          </div>
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

export default connect(stateToProps, dispatchToProps)(PostDetails);