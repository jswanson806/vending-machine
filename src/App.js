import React from "react";
import './App.css';
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Candy from "./Candy";
import Chips from "./Chips";
import { BrowserRouter, Route,  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

          {/* routes */}
          <Route exact path ='/' key='/'>
            <VendingMachine />
          </Route>
          <Route exact path ='/soda' key="soda">
              <Soda />
          </Route>
          <Route exact path ='/chips' key="chips">
              <Chips />
          </Route>
          <Route exact path ='/candy' key="candy">
              <Candy />
          </Route>
        
      </BrowserRouter>
    </div>
  );
}

export default App;


// PAGE IS NOT UPDATING WHEN I CLICK THE LINKS