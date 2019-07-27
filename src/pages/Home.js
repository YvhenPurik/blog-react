import React from 'react';
import Postlist from '../components/Postlist'
import Header from '../components/header'
import '../style/App.scss';

class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <h1 className="Home_text">News</h1>
        <Postlist/>
      </div>
    );
  }
  
}

export default Home;
