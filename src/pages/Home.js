import React from 'react';
import Postlist from '../components/Postlist'
import Header from '../components/header'
import Footer from '../components/footer'
import '../style/App.scss';

class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <h1 className="Home_text">News</h1>
        <Postlist/>
        <Footer/>
      </div>
    );
  }
  
}

export default Home;
