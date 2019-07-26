import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../sagas/index'
import {fetchPosts, updateAuthorFilter} from '../actions/posts';
import Header from './header';


class PostDetails extends React.Component {
  componentDidMount() {
      
          this.fetchPosts();
  }


  fetchPosts = () => {
      this.props.fetchPosts();
  };


  render() {
      
   return (
       <div>
           <Header/>
          <div className="posts">
              <main className="main">
                {123123}
              </main>
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