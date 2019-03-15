import React, { Component } from 'react';
import logo from '../assets/download.png'
import Title from './Title'
import{NavLink} from 'react-router-dom'
const Home = () => {
    return ( 
    <div className="frame">
    <Title />
    <div className="sideimg"><img src={logo}/></div>
    <div className="sidepanel">
    <div className="land">
    click any of the buttons to get started</div></div> 
    <button className="loginbutton textbtn"><NavLink to="/signin">login</NavLink></button>
    <button className="create textbtn "><NavLink to="/signout">create new account</NavLink></button>  
    </div> );
}
 
export default Home;