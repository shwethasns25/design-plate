import React, { Component } from 'react';
import ATestComp from "./ATestComp";
var la = require('./components');
const Element=la['ATest'];
class BuilderTest extends Component {
	super(props) {

	};
	render() {
		return (<Element><div>Ya</div></Element>);
   	}
}
export default BuilderTest;