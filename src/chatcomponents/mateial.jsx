import React from 'react';
import {Link} from 'react-router-dom'
const Material = () => {
    const box={
        height:200
    }
    return ( 
        <div>
        <div className="container hide">
        <h4 className="hide" >hide me on all screen sizes</h4>
        <h4 className="hide-on-small-only" > hide me on small screen sizes</h4>
        <h4 className="hide-on-med-only" >hide me on medium screen sizes</h4>
        <h4 className="hide-on-large-only" >hide me on large screen sizes</h4>
        <h4 className="hide-on-med-and-up" >hide me on medium and large screen sizes</h4>
        <h4 className="hide-on-med-and-down" >hide me on medium  and small screen sizes</h4>
        <h4 className="" >only show me on screen sizes</h4>
        </div>
        <div className="container hide">
        <h4 className="center-align" >center alingment</h4>
        <h4 className="left-align" >left alingment</h4>
        <h4 className="right-align" >right alingment</h4>
        <div style={box} className="container grey lighten-2 valign-wrapper " >
        <h5  className="" >vertical alingment</h5>
        </div>
        <div className="container">
        <p className="truncate" >alwaysforgive your mistakes alwaysforgive your mistakes alwaysforgive your mistakes alwaysforgive your mistakes</p>
        </div>
        </div>
        <div className="container hide">
        <h4>buttons</h4>
        <a href="#" className="btn"> normal button</a>
        <a href="#" className=" btn-small waves-effect waves-light">small button</a>
        <a href="#" className="btn-large">large buton</a>
        <a href="#" className="btn indigo waves-effect waves-light"> indigo button</a>
        <a href="#" className="btn disabled">disabled button</a>
        <h4>floating button</h4>
        <a href="#" className="btn-floating pink pulse"></a>
        <h4>other buttons</h4>
        <div className="btn">i am a div tag</div>

        </div>
        <div className="container hide">
        <h4>icons</h4>
        <i className="material-icons red-text">error</i>
        <i className="material-icons yellow-text text-darken-2">warning</i>
        <i className="material-icons grey-text">cloud</i>
        <i className="material-icons blue-text">folder</i>
        <h4>icons inside buttons</h4>
        <a href="#" className="btn indigo">
        <span>send</span>
        <i className="material-icons right">send</i></a>
        <a href="#" className="btn pink waves-effect waves-light">
        <span>add</span>
        <i className="material-icons left white-text">add</i></a>
        <h4>icons inside floating buttons</h4>
        <a href="#" className="btn-floating blue pulse">
        <i className="material-icons">add</i></a>
        <a href="#" className="btn-floating red pulse">
        <i className="material-icons">remove</i></a>
        <a href="#" className="btn-floating orange pulse">
        <i className="material-icons">edit</i></a>
        </div>
        <div className="row hide">
        <div className=" grey col  s12">content</div>
        <div className="col  s3">content</div>
        <div className=" grey col  s3">content</div>
        <div className="col  s3">content</div>
        </div>
        <div className="row hide">
        <div className="grey col grey s6 m3
        l6">content</div>
        <div className=" col  s6 m3 l6">content</div>
        <div className=" grey col grey s6 m3 l6">content</div>
        <div className="col  s6 m3 l6">content</div>
        </div>
        {/* <nav className="nav-wrapper green darken-3">
        <div className="container">
        <a href="#" className="brand-logo">lets chat</a>
        <a href="#" className="sidenav-trigger"data-target="mobile-links"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul>
        </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul> */}
        <div className="container hide">
        <h2>collection</h2>
        <ul classname="collection with-header">
        <li className="collection-header"><h4>customers</h4></li>
            <li className="collection-item avator" >
            <i className="material-icons circle blue white-text">person</i>
            <span className="title">brian</span>
            <p className="grey-text">comp wizard</p>
            <a href="" className="secondary-content">
            <a href="#" className="btn-floating blue pulse">
        <i className="material-icons">add</i></a>
        </a>
            </li>
            <li className="collection-item avator" >
            <i className="material-icons circle blue white-text">person</i>
            <span className="title">voke</span>
            <p className="grey-text">big bro</p>
            <a href="" className="secondary-content">
            <a href="#" className="btn-floating blue pulse">
        <i className="material-icons">add</i></a></a>
            </li>
            <li className="collection-item avator" >
            <i className="material-icons circle blue white-text">person</i>
            <span className="title">nyangi</span>
            <p className="grey-text">african queen</p>
            <a href="" className="secondary-content ">
            <a href="#" className="btn-floating blue pulse">
        <i className="material-icons">add</i></a>
            </a>
            </li>
            <li className="collection-item avator" >
            <i className="material-icons circle blue white-text">person</i>
            <span className="title">dama</span>
            <p className="grey-text">chebet</p>
            <a href="" className=" secondary-content">
            <a href="#" className="btn-floating blue pulse">
        <i className="material-icons">add</i></a></a>
            </li>
            <li className="collection-item avator" >
            <i className="material-icons circle blue white-text">person</i>
            <span className="title">diana</span>
            <p className="grey-text">cutest siz</p>
            <a href="" className="secondary-content">
            <a href="#" className="btn-floating blue pulse">
        <i className="material-icons">add</i></a></a>
            </li>
        </ul>
        
        </div>

        </div>
        
            
        
        
        
    );
}
 
export default Material;