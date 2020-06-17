import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

function CartItem(props) {
    const {
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(GlobalContext);

    return (
        <li className="collection-item avatar">
            <div className="item-img">
                <img src={props.imgSrc} alt={props.title} />
            </div>

            <div className="item-desc">
                <span className="title">{props.title}</span>
                <p>{props.description}</p>
                <p>
                    <b>Price: {props.price}$</b>
                </p>
                <p>
                    <b>Quantity: {props.quantity}</b>
                </p>
                <div className="add-remove">
                    <Link
                        to="/cart"
                        onClick={() => {
                            increaseQuantity(props.id);
                        }}
                    >
                        <i className="material-icons waves-effect waves-light">
                            arrow_drop_up
                        </i>
                    </Link>
                    <Link
                        to="/cart"
                        onClick={() => {
                            decreaseQuantity(props.id);
                        }}
                    >
                        <i className="material-icons waves-effect waves-light">
                            arrow_drop_down
                        </i>
                    </Link>
                </div>
                <button
                    className="waves-effect waves-light btn pink remove"
                    onClick={() => {
                        removeItemFromCart(props.id);
                    }}
                >
                    Remove
                </button>
            </div>
        </li>
    );
}

export default CartItem;
