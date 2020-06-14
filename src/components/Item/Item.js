import React from "react";
import { img1 } from "../../images";
import { Link } from "react-router-dom";

function Item(props) {
    return (
        <li className="collection-item avatar">
            <div className="item-img">
                <img src={img1} alt="Shoe Image" />
            </div>

            <div className="item-desc">
                <span className="title">Shoe1</span>
                <p>desc1</p>
                <p>
                    <b>Price: 1000$</b>
                </p>
                <p>
                    <b>Quantity: 10</b>
                </p>
                <div className="add-remove">
                    <Link to="/cart">
                        <i className="material-icons waves-effect waves-light">
                            arrow_drop_up
                        </i>
                    </Link>
                    <Link to="/cart">
                        <i className="material-icons waves-effect waves-light">
                            arrow_drop_down
                        </i>
                    </Link>
                </div>
                <button className="waves-effect waves-light btn pink remove">
                    Remove
                </button>
            </div>
        </li>
    );
}

export default Item;
