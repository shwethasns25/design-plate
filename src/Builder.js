import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ATestComp from "./ATestComp";
var list = {'ATestComp': ATestComp};
class App extends Component {
	super(props) {

	};
	render() {
      if (this.props.compName === 'ATestComp')
      	return <div>{this.props.children}<ATestComp {...this.props} /></div>;
      else return <div> Yooo </div>
   	}
}
export default App;