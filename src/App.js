import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details" component={Detail} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
