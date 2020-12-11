import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Homepage from './Page/Homepage';

  function Routes(){
      return(
        <Router>
            <div>
                <Switch>
                   <Route key={"/"} path="/" component={Homepage} />
                </Switch>
            </div>
        </Router>
      )
  }

  export default Routes;