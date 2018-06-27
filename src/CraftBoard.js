import React, { Component } from 'react';
import utils from '../www/js/utils.js';
import Builder from './Builder';
class CraftBoard extends Component {
   render() {
      return (
         <div className="col-md-12">
            {
               /*
               <Builder compName='ATestComp' value="Jangwa">
                  <span> Amar </span>
               </Builder>
               */
            }
            <div className="col-md-4">
               <div id="div3" className="col-md-12 comp-list" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                  <div className="comp-holder">
                     <span> component 1: </span>
                     <div id="comp1" className="a-test-component" draggable="true"
                        onDragStart={utils.drag.bind(utils)}>
                        A TEST COMPONENT
                     </div>
                  </div>
                  <div className="comp-holder">
                     <span> component 2: </span>
                     <div id="comp2" className="a-test-component" draggable="true"
                        onDragStart={utils.drag.bind(utils)}>
                        Another TEST COMPONENT
                     </div>
                  </div>
                  <div className="comp-holder">
                     <span> component 3: </span>
                     <div id="comp3" className="a-row" draggable="true"
                        onDragStart={utils.drag.bind(utils)}>
                        
                     </div>
                  </div>
                  <div className="comp-holder">
                     <span> component 4: </span>
                     <div id="comp4" draggable="true"
                        onDragStart={utils.drag.bind(utils)} className="a-grid">
                        <div className="left" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                           
                        </div>
                        <div className="left" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-8">
               <div id="div1" className="col-md-9 board" onDrop={utils.drop.bind(utils)} onDragOver={utils.allowDrop}>
                  
               </div>
            </div>
         </div>
      );
   }
}
export default CraftBoard;