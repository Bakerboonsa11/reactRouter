import { useState } from "react";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul className="navigation">
          <li>
            <a href="profile">Profile page</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
