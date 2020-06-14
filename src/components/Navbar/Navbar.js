import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">
                    Shoping Cart
                </Link>
                <ul id="nav-mobile" className="right">
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <i className="material-icons">shopping_cart</i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
