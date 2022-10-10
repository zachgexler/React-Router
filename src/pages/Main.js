import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="welcome">
      <h1>Welcome to The Ticker</h1>
      <Link to="/stocks">
        <button>
          <h2>Dashboard</h2>
        </button>
      </Link>
    </div>
  );
};

export default Main;
