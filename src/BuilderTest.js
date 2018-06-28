import React, { Component } from 'react';
import ATestComp from "./ATestComp";
var AllComponents = require('./components');
class BuilderTest extends Component {
	super(props) {

	};
	buildThePage(){
		const TREE = [JSON.parse(`{"component":"_root","child":[{"component":"a-gid","child":[{"component":"a-gid-left","child":[{"component":"a-test-comp","child":[null],"data":{}}],"data":{}},{"component":"a-gid-right","child":[{"component":"a-2nd-test-comp","child":[null],"data":{}}],"data":{}}],"data":{}}],"data":{}}`)];
		const theTree = this.getTheComp(TREE[0]);
		return theTree;
	};
	getTheComp(node){
		if(!node) return null;
		const child = [];
		if (node && node.child) {
			for(var i=0;i<node.child.length;i++) {
				child.push(this.getTheComp(node.child[0]));
			}
		}
		var Ele=AllComponents[node.component];
		return <Ele>{child}</Ele>;
	};
	render() {

		return (this.buildThePage());
   	}
}
export default BuilderTest;