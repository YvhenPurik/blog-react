import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo2 from '../logo.png';
class Header extends React.Component{
    render(){
        return(
         
               <div className="header">
             
              
              {/* <div className="container-fluid" style={{ padding: "0px"}}>
                <nav class="navbar navbar-light light" style={{backgroundColor: "rgba(157, 107, 188, 0.5)"}}>
                  <form class="form-inline">
                  
                  <Link className="btn-nav-link" to={`/`}>
                 
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                    Bootstrap
                 
                  </Link>
                  <Link className="btn-nav-link" to={`/`}>
                    <button class="btn btn-outline-success" type="button">Home</button>
                    </Link>
                    <Link className="btn-nav-link"  to={`/contact`}>
                    <button class="btn btn-outline-success" type="button">Contact</button>
                    </Link>
                  </form>
                </nav>
               </div> */}

          <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-around" style={{background:"#fff"}}>
          <Link className="btn-nav-link float-left logo" to={`/`}><img src={logo2} width="50px" height="50px" /><span>Logo</span></Link>
          <Link className="btn-nav-link" to={`/`}><button class="btn btn-outline-danger shadow-none ml-auto mr-1" >Pos News</button></Link>
          <Link className="btn-nav-link" to={`/contact`}><button class="btn btn-outline-danger shadow-none ml-auto mr-1" >Contact</button></Link>
          </nav>
         </div>


          
            
        )
    }
}



export default Header;
