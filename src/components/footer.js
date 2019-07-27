import React from 'react';
import Postlist from '../components/Postlist'
import { Link } from "react-router-dom";
import logo2 from '../logo.png';
import '../style/App.scss';

class Footer extends React.Component {
  render(){
    return (
      <div className="App">
          <div class="footer">
            <footer class="text-center">
                
                <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-around" style={{background:"#fff"}}>
                    
                    <Link className="btn-nav-link" to={`/`}><button class="btn btn-outline-danger shadow-none ml-auto mr-1" >Pos News</button></Link>
                    <Link className="btn-nav-link" to={`/contact`}><button class="btn btn-outline-danger shadow-none ml-auto mr-1" >Contact</button></Link>
                </nav> 
               
                
            </footer>
    </div>
        
      </div>
    );
  }
  
}

export default Footer;
