import React from "react";
import "./App.css";
import { Navbar, Home, Cart } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Provider from "./context/GlobalState";

function App(props) {
    return (
        <Provider>
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
        </Provider>
    );
}

export default App;
