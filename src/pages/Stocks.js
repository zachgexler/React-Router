import React from "react";
import stocks from "../data/data";
import { Link } from "react-router-dom";

const Stocks = (props) => {
  const foundStock = stocks.filter(
    (stockMatch) => stockMatch.symbol === props.match.params.symbol
  )[0];
  // console.log("I found your stock:")
  // console.log(foundStock)

  return (
    <div>
      <h1>{foundStock.name} Info Page</h1>
      <ul className="stockInfo">
        <li>
          <strong>EXCHANGE RATE: </strong>
          <span>{foundStock.change}</span>
        </li>
        <li>
          <strong>LAST PRICE: </strong>
          <span>{foundStock.lastPrice}</span>
        </li>
        <li>
          <strong>HIGH: </strong>
          <span>{foundStock.high}</span> | <strong>LOW: </strong>
          <span>{foundStock.low} </span>
        </li>
      </ul>
      <Link to="/stocks">
        <button>
          <h2>Go to your dashboard</h2>
        </button>
      </Link>
    </div>
  );
};

export default Stocks;
