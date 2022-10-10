import React from "react";
import stocks from "../data/data";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {stocks.map((stock, index) => {
        const { name, symbol } = stock;
        return (
          <Link key={index} to={`/stocks/${symbol}`}>
            <h4>{name}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Dashboard;
