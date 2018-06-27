import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CraftBoard from "./CraftBoard";
import Builder from "./Builder";
class App extends Component {
   render() {
      return (
         <Router>
            <Switch>
               <Route exact path='/' component={CraftBoard} />
               <Route exact path='/builder' component={Builder} />
            </Switch>
         </Router>
      );
   }
}
export default App;