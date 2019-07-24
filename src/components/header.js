import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
            <div className="header">
               <div>
                 <Link to={`/contact`}>Contact </Link>
              </div> 
              <div>
                <Link to={`/`}>Home</Link>
              </div>
            </div>
        )
    }
}



export default Header;
