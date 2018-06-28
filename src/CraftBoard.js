import React, { Component } from 'react';
import utils from '../www/js/utils.js';
import Builder from './Builder';
class CraftBoard extends Component {
   render() {
      return (
         <div className="col-md-12">
            {
               /*
               <Builder data-compname='ATestComp' value="Jangwa">
                  <span> Amar </span>
               </Builder>
               */
            }
            <div className="col-md-4">
               <div id="div3" className="col-md-12 comp-list" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                  <div className="comp-holder">
                     <span> component 1: </span>
                     <div id="comp1" data-compname="a-test-comp" className="a-test-component" draggable="true"
                        onDragStart={utils.drag.bind(utils)}>
                        A TEST COMPONENT
                     </div>
                  </div>
                  <div className="comp-holder">
                     <span> component 2: </span>
                     <div id="comp2" data-compname="a-2nd-test-comp" className="a-test-component" draggable="true"
                        onDragStart={utils.drag.bind(utils)}>
                        Another TEST COMPONENT
                     </div>
                  </div>
                  <div className="comp-holder">
                     <span> component 3: </span>
                     <div id="comp3" data-compname="a-row" className="a-row" draggable="true"
                        onDragStart={utils.drag.bind(utils)}>
                        
                     </div>
                  </div>
                  <div className="comp-holder">
                     <span> component 4: </span>
                     <div id="comp4" data-compname="a-gid" draggable="true"
                        onDragStart={utils.drag.bind(utils)} className="a-grid">
                        <div className="left" id="comp4-left" data-compname="a-gid-left" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                           
                        </div>
                        <div className="left" id="comp4-right" data-compname="a-gid-right" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                           
                        </div>
                     </div>
                  </div>
                  <div className="comp-holder">
                     <button onClick={utils.buildTree.bind(utils)}>
                        Build The tree
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-md-8">
               <div id="div1" data-compname="_root" className="col-md-9 board" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                  
               </div>
            </div>
         </div>
      );
   }
}
export default CraftBoard;