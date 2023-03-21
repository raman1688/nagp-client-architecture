import React from "react";

import { Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <Link to="/tictactoe">
      <button type="button">tictactoe</button>
    </Link>
    <Link to="/hangman">
      <button type="button">hangman</button>
    </Link>
  </div>
);

export default Dashboard;
