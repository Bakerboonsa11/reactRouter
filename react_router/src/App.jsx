import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/profile/spinach">Spinach</Link>
          </li>
          <li>
            <Link to="/profile/popeye">Popeye</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
