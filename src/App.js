import React, { Component } from 'react';
import './App.css';
import Root from './components/onclick';
import {connect} from 'react-redux'
class App extends Component {
  state={
    stop:this.props.stop
  }
  

  render() {
    
  console.log(this.props)
    return (
      <div className="App" >
    <Root stop={this.state.stop} handlecllick={()=>{this.setState({stop:!this.state.stop})}
} />
    {this.state.stop?<button className="red" onClick={()=>{this.setState({stop:!this.state.stop})}}>open</button>:null}
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return{
    stop:state.stop
  }
}
 
export default connect(mapStateToProps)(App)  ;
