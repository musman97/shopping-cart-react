import React, { useContext } from "react";
import Card from "../Card/Card";
import { GlobalContext } from "../../context/GlobalState";

function Home(props) {
    const { items } = useContext(GlobalContext);

    return (
        <div className="container">
            <h3 className="center">Items</h3>
            <div className="box">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        id={item.id}
                        img={item.imgSrc}
                        title={item.title}
                        desc={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
