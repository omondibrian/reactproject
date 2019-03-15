 import React, { Component } from 'react';
 
 import './components.css'
import Contacts from './contacts';
import SideHeader from './SideHeader';

 class DashBoard extends Component {
     state = {  }
     render() { 
         return ( 
         <div className="container "> 
            <div className="row">
            <div className="col m2 l3  size hide-on-med-and-down">
         <SideHeader />       
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        </div> 
        <div className="col s12 m9 l6  chatarea">
        <div className="green lighten-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur consequuntur vel officia veniam? Dolore earum sed vel necessitatibus possimus voluptatibus enim nisi deserunt quis animi! Accusantium exercitationem earum perspiciatis!</p>
        </div>
        </div>
        <div className=" col m3 l3  size hide-on-med-and-down">
        <div className="container avator">
            <a href="" className="center-align btn-floating white">
            <i className="material-icons grey lighten-3">person</i>
            </a>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus, distinctio tempore, tenetur esse perspiciatis debitis officiis vero quae in facilis similique expedita quia pariatur nam libero placeat. Delectus, libero?
            </p>
        </div>
        </div>
        </div>
        </div>
        
         );
     }
 }
  
 export default DashBoard;