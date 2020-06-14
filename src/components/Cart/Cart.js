import React from "react";
import Item from "../Item/Item";
import "./Cart.css";

function Cart(props) {
    return (
        <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    <Item />
                    <Item />
                </ul>
            </div>
            <div className="container" style={{ marginBottom: "20px" }}>
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item">
                        <b>Total: 100 $</b>
                    </li>
                </div>
                <div>
                    <button className="waves-effect waves-light btn">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
