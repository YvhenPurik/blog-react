import React from 'react';
import Counter from '../components/Counter'
import Header from '../components/header'
import '../style/App.scss';

class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <p>Hello world</p>
        <Counter/>
      </div>
    );
  }
  
}

export default Home;
