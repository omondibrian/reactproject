import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js';
import './components.css'
import {Link} from 'react-router-dom'
class Nav extends Component {
  state = {  }
  componentDidMount(){
    var elem=document.querySelector('.sidenav');
    M.Sidenav.init(elem,{edge:'left',inDuration:250});
  }
  render() { 
    return ( <div> <nav className="nav-wrapper green darken-3">
    <div className="container">
    <div className="brand-logo">lets chat</div>
    <a href="#" className="sidenav-trigger"data-target="mobile-links"><i className="material-icons">menu</i></a>
    <ul className="right hide-on-med-and-down">
        <li><Link to="/DashBoard">home</Link></li>
        <li><Link to="/login">log in</Link></li>
        <li><Link to="/signup">signup</Link></li>
        <li><a href="#">log out</a></li>
        <li><a href="#" className="btn-floating grey darken-2 z-depth-0">
        <i className="material-icons">person</i></a></li>
        <li><a href="#" className="btn-floating grey darken-2 z-depth-0">
        <i className="material-icons">notifications</i></a></li>
        <li>
          <span className="badge  white-text pink new">5S</span>
        </li>
    </ul>
    </div>
    </nav>
    <ul className="sidenav" id="mobile-links">
    <li><Link to="/DashBoard">home</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/signup">sign up</Link></li>
        <li><a href="#">log out</a></li>
        <li><a href="#">profile</a></li>
    </ul></div> );
  }
}
 
export default Nav;