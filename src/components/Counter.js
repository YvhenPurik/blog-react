import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../sagas/index'
import {fetchPosts, updateAuthorFilter} from '../actions/posts';


class Counter extends React.Component {
  componentDidMount() {
      
          this.fetchPosts();
  }

  onItemClickHandler = (postId) => {
      this.props.changePageTo('/details', postId);
  };

  fetchPosts = () => {
      this.props.fetchPosts();
  };

  filterChangedHandler = (event) => {
      const author = event.target.value;

      this.props.updateAuthorFilter(author);
  };

  render() {
      let posts = <p>No posts</p>;
      console.log(this.props.authorName)
      
      return (<div className="posts">
              <main>
                  <div className="posts__options">
                      
                      <div className="posts__counter">Available posts:</div>
                  </div>
                  {posts}
              </main>
          </div>
      )
  };
}



const stateToProps = state => {
  return {
      authorName: state,
     
  };
};

const dispatchToProps = dispatch => {
  return {
      fetchPosts: () => dispatch(fetchPosts()),
      updateAuthorFilter: (author) => dispatch(updateAuthorFilter(author)),
  };
};

export default connect(stateToProps, dispatchToProps)(Counter);