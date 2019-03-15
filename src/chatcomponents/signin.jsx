import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Title from './Title'
class Login extends Component {
    state = {  }
   
    render() { 
        return (
            <div className="valign-wrapper" >
            <section className="section container" >
            <div className="row">
            <div className="col s12 l5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, itaque quaerat voluptatem nam aliquid tempore numquam perspiciatis veritatis quae laudantium quos fugit rerum, quis placeat, adipisci pariatur perferendis sint. Provident?</p>
            </div>
            <div className="col s12 l5 offset-l2">
            <form action="">
            <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" id='email'/>
            <label htmlFor="email">enter your email address</label>
            </div>
            <div className="input-field">
            <i className="material-icons prefix">person</i>
            <input type="password" id='password'/>
            <label htmlFor="password">enter your password</label>

            <button className="btn-small waves-effect waves-light green darken-3">login</button>
            </div>
            
            </form>
            
            </div>
            </div>
            </section>
            
            </div> );
    }
}
 
export default Login;