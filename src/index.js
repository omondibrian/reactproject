import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter,Route} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'



import Home from '../src/chatcomponents/homepage'
import Nav from '../src/chatcomponents/nav'
import Login from '../src/chatcomponents/signin'
import signup from './chatcomponents/signup'
import DashBoard from '../src/chatcomponents/dashboard'
import Material from '../src/chatcomponents/mateial'
import Modals from "./chatcomponents/modals";


ReactDOM.render(
<BrowserRouter >
<div>
{/* <Navbars /> */}
<Nav />
{/* <Modals /> */}
<Route exact path='/' component={Home} />
<Route path='/login' component={Login} />
<Route path='/signup' component={signup} />
<Route path='/Dashboard' component={DashBoard} />
</div>
</BrowserRouter>
, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
