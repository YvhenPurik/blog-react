import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../sagas/index'
import {fetchPosts, updateAuthorFilter,fetchPostDetails} from '../actions/posts';
import PostsList from './List';
import { NavLink } from "react-router-dom";
import PostDetails from './PostDetails';

class Postlist extends React.Component {
  componentDidMount() {
       this.fetchPosts();
  }

  
  fetchPosts = () => {
      this.props.fetchPosts();
  };
  
  details(el){
    this.props.fetchPostDetails(el.id)
    console.log('asdasdad-->',el)
    localStorage.setItem("postDetails", JSON.stringify(el));
  }

  render() {
      let posts = <p>No posts</p>;
     
      let postsList;
      let photolist = this.props.posts.reducer.data.length = 20;
    
      if(this.props.posts.reducer.data.length > 0){
        postsList =  this.props.posts.reducer.data.map((el)=>{
            return (
              <NavLink to={'/details'}  className={'NavLink'} onClick={()=>this.details(el)}>
               <div className="col">
               <div className="flex">
                    <div className="card">
                      <div className="header">
                          <div className="title text-center">
                            <div>
                              <h1 className="text-center">{el.title}</h1>
                              <h6><span>by</span>: {el.author}</h6>
                            </div>
                        </div>
                      </div>
                      <div className="content">
    
                        <div className="closebar">
                          <h1 className="text-center">{el.title}</h1>
                            
                          </div>
                        <p>{el.body}</p>
                          <img src="http://placehold.it/380x200"/>
                      </div>
                    </div>
                  </div>
               </div>
               
                 
              </NavLink>
                
            )
       
        
    })
}
   return (
   
       <div className="container-fluid">
       <div className="row align-items-center justify-content-center">
             {postsList}
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

export default connect(stateToProps, dispatchToProps)(Postlist);