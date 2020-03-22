import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import MyNavBar from "./Components/Node/MyNavBar";
import AddPizza from "./Components/AddPizza";
import Pizza from './Components/Pizza'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
        <div class="container">
            <MyNavBar />
            <Router>
                <Switch>
                    <Route path="/pizzas">
                        <Pizza />
                    </Route>
                    <Route path="/new-pizza">
                        <AddPizza />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
