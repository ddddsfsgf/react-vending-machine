import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div className="App">
            <h1 className="title">Vending Machine!</h1>
            <div className="product-container">
                <Link className="text" to="/chips">Chips</Link>
                <Link className="text" to="/soda">Soda</Link>
                <Link className="text" to="/candy">Candy</Link>
            </div>
        </div>
    )
}

export default VendingMachine;