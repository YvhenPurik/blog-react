import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../sagas/index'
import {fetchPosts, updateAuthorFilter, fetchPostDetails} from '../actions/posts';
import Header from './header';
import moment from 'moment';

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("PostDetails");
    this.state={
      fromLocal:''
    }
    
  }
  


  componentDidMount(){
    let postDetails = localStorage.getItem("postDetails")
    console.log('componentDidMount',JSON.parse(postDetails).id)
    this.props.fetchPostDetails(JSON.parse(postDetails).id)
  }
  

  render() {
   
     let postDetails = localStorage.getItem("postDetails")
     
    //  console.log('postDetails-->', this.props.posts.reducer.currentPost) 
     let {title, body, comments} = this.props.posts.reducer.currentPost
     console.log('comments-->', comments) 
      return (
       <div className="App">
           <Header/>
          <div className="posts-details">
                <div className="post-details-wrap">
                
                <div>
                <p className="text-center text-title">{title}</p>
                </div>
                  
                <div className="line-top"></div>
                  <p className="author">post by:{JSON.parse(postDetails).author}</p>
                  <p className="body-post">{body}</p>
                  <div className="line-bottom"></div>
                  <p className="date-post">{moment().format('YYYY-MM-DD')}</p>
                </div>
                <div className="coments-wrap">

                      {comments ? comments.map((el)=>{
                    return (
                      <div className="coments" key={el.id}>
                          <div className="coments-email" >{el.email}</div>
                          <div className="coments-body">{el.body}</div>
                      </div>
                      
                    )
                }):null}


                </div>
               
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
      fetchPostDetails: (id) => dispatch(fetchPostDetails(id))
     
  };
};

export default connect(stateToProps, dispatchToProps)(PostDetails);