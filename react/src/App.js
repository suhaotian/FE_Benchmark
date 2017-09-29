import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {content: 5000, x: 0}
  }

  componentDidUpdate() {
    console.timeEnd('test');
  }

  handleClick = () => {
    console.time('test');
    this.setState({x: this.state.x+1});
  }

  render() {
    var Divsdom=[]
    const {x, content} = this.state
    for(var i = 0;i<5000;i++){
      Divsdom.push(<div key={i}>{x+i}</div>);
    }
    return (
      <div>
        <button onClick={this.handleClick}>+1</button>
        {Divsdom}
      </div>
    );
  }
}


export default App;
