import React from 'react';
import Postlist from '../components/Postlist'
import Header from '../components/header'
import '../style/App.scss';

class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <p>Hello world</p>
        <Postlist/>
      </div>
    );
  }
  
}

export default Home;
