import React from "react";
import "./App.css";
import { Navbar, Home, Cart } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
