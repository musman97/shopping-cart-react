import React from "react";
import { img1, img2, img3, img4, img5, img6 } from "../../images";
import Card from "../Card/Card";

function Home(props) {
    return (
        <div className="container">
            <h3 className="center">Items</h3>
            <div className="box">
                <Card img={img1} title={"Shoe1"} desc={"desc1"} price={300} />
                <Card img={img2} title={"Shoe2"} desc={"desc2"} price={400} />
                <Card img={img3} title={"Shoe3"} desc={"desc3"} price={500} />
                <Card img={img4} title={"Shoe4"} desc={"desc4"} price={600} />
                <Card img={img5} title={"Shoe5"} desc={"desc5"} price={700} />
                <Card img={img6} title={"Shoe6"} desc={"desc6"} price={800} />
            </div>
        </div>
    );
}

export default Home;
