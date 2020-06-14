import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.img} alt="Shoe Image" />
                <span className="card-title">{props.title}</span>
                <span className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </span>
            </div>

            <div className="card-content">
                <p>{props.desc}</p>
                <p>
                    <b>Price:100$</b>
                </p>
            </div>
        </div>
    );
}

export default Card;
