import React from "react";
import Main from "./src/pages/Main";
import About from "./src/pages/About";
import Dashboard from "./src/pages/Dashboard";
import Stock from "./src/pages/Stocks";
import { Route, Switch } from "react-router-dom";
import Nav from "./src/components/Nav";
import stocks from "./src/data/data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(routerProps) => (
            <Stock allStocks={stocks} {...routerProps} />
          )}
        />
        <Route path="/stocks">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
