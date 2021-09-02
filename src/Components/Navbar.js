import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlignRight, FaWindows} from 'react-icons/fa';
import { Link} from 'react-router-dom';


import '../App.css'



export default class Navbar extends Component {

  
    
    state={
        isOpen:false
    }
    handleToggle =()=>{
        this.setState({isOpen:!this.state.isOpen})
    }

    
  render() {
   

        return (
            
         
            <div  className="navbar">
                
                <div className="nav-center">
                   < div className="nav-header">
                   <Link to="/">
                           <img  src={logo} alt="Beach Resort"></img>
                       </Link>
                       <button type="button" className="nav-btn" onClick={this.handleToggle}>
                           <FaAlignRight className="nav-icon"/>
                           

                       </button>
                   </div>
                   <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                       <li>
                            <Link to="/">
                          <button  className="b1" type='button'>Home</button></Link>
                       </li>
                       <li>
                           <Link to="/rooms"><button   className="b1" type='button'>Rooms</button></Link>
                       </li>
                       
                       
                      
                      
                   </ul>
                  
                </div>
            </div>
            
        )
    }
}
/*<img style={{"height":"100px"}} src={logo} alt="Beach Resort"></img>*/ 
