import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart(props) {
    const { cart } = useContext(GlobalContext);

    return (
        <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {cart.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            id={cartItem.id}
                            imgSrc={cartItem.imgSrc}
                            title={cartItem.title}
                            description={cartItem.description}
                            price={cartItem.price}
                            quantity={cartItem.quantity}
                        />
                    ))}
                </ul>
            </div>
            <div className="container" style={{ marginBottom: "20px" }}>
                <div className="collection">
                    <li className="collection-item">
                        <b>
                            Total:{" "}
                            {cart.reduce(
                                (acc, cartItem) =>
                                    acc + cartItem.quantity * cartItem.price,
                                0
                            )}
                            $
                        </b>
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
