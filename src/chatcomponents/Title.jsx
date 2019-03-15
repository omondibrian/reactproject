import React, { Component } from 'react';
import menu from '../assets/menu.svg'

const Title = () => {
    return ( <div className="title">
    <a className="icon">
    <img src={menu} alt=""/>
    </a>
    <div className="title text">
    lets chat</div>
    </div> );
}
 
export default Title;