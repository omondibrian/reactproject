import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class Modals extends Component {
    state = {  }
    componentDidMount(){
    const elem=document.querySelectorAll('.modal');
    M.Modal.init(elem);
     
    }
    render() { 
        return ( 
        <div className="container">
        <h2>modals</h2>
        <a href="#terms" className="btn orange modal-trigger" data-trigger="terms">
        Terms and conditions</a>
        <div className="modal" id="terms">
        <div className="modal-content">
        <h2>hi check it out</h2>
        <p>Free electron and nearly free electron model & concepts leading to Kronig – Penney model
	Free Electron Theory
In 1900, Drude first proposed that the large electrical and thermal conductivity of metals and semiconductors is due to the presence of free electrons. Also Drude and Lorentz jointly explained these properties based on the following assumptions,
</p>
        </div>
        </div>
        
        </div> );
    }
}
 
export default Modals;
