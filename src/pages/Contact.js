import React from 'react';
import Counter from '../components/Postlist'
import '../style/App.scss';
import Header from '../components/header';
import Footer from '../components/footer'

class Contact extends React.Component {
  render(){
    return (
      <div className="App">
          <Header/>
          <h1 className="Home_text">Contact page</h1>
          <Footer/>
      </div>
    );
  }
  
}

export default Contact;
