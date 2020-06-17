import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Card.css";

function Card(props) {
    const { addItemToCart } = useContext(GlobalContext);

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.img} alt={props.title} />
                <span className="card-title">{props.title}</span>
                <span
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => {
                        addItemToCart(props.id);
                    }}
                >
                    <i className="material-icons">add</i>
                </span>
            </div>

            <div className="card-content">
                <p>{props.desc}</p>
                <p>
                    <b>Price:{props.price}$</b>
                </p>
            </div>
        </div>
    );
}

export default Card;
